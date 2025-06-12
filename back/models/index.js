const sequelize = require('../config/database');
const Club = require('./Club');
const Team = require('./Team');
const Player = require('./Player');
const Statistics = require('./Statistics');

const syncDatabase = async () => {
    await sequelize.sync({ force: true }); // Use force: true for dev only
    console.log('Database synced');
};

module.exports = { Club, Team, Player, Statistics, syncDatabase };