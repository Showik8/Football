const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Club = require('./Club');

const Team = sequelize.define('Team', {
    team_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    club_id: {
        type: DataTypes.INTEGER,
        references: { model: Club, key: 'club_id' }
    },
    age_group: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    coach_name: DataTypes.STRING(100)
}, {
    tableName: 'Teams',
    timestamps: false
});

Team.belongsTo(Club, { foreignKey: 'club_id' });
Club.hasMany(Team, { foreignKey: 'club_id' });

module.exports = Team;