const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Team = require('./Team');

const Player = sequelize.define('Player', {
    player_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    team_id: {
        type: DataTypes.INTEGER,
        references: { model: Team, key: 'team_id' }
    },
    first_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    birth_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    position: DataTypes.STRING(50),
    height: DataTypes.INTEGER,
    status: {
        type: DataTypes.STRING(20),
        defaultValue: 'active'
    }
}, {
    tableName: 'Players',
    timestamps: false
});

Player.belongsTo(Team, { foreignKey: 'team_id' });
Team.hasMany(Player, { foreignKey: 'team_id' });

module.exports = Player;