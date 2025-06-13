const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Player = require("./Player");

const Statistics = sequelize.define(
  "Statistics",
  {
    stat_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    player_id: {
      type: DataTypes.INTEGER,
      references: { model: Player, key: "player_id" },
    },
    season: DataTypes.STRING(9),
    matches_played: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    goals: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    assists: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    tableName: "statistics",
    timestamps: false,
  }
);

Statistics.belongsTo(Player, { foreignKey: "player_id" });
Player.hasMany(Statistics, { foreignKey: "player_id" });

module.exports = Statistics;
