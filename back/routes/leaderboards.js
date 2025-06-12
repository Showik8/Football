const express = require('express');
const { Player, Statistics, Team, Club, Sequelize } = require('../models');
const router = express.Router();

// Get top 10 goal scorers
router.get('/goals', async (req, res) => {
    try {
        const { age_group, region } = req.query;
        const stats = await Statistics.findAll({
            where: {
                season: '2024/2025',
                goals: { [Sequelize.Op.gt]: 0 }
            },
            include: [
                {
                    model: Player,
                    include: [{
                        model: Team,
                        include: [{ model: Club, where: region ? { region } : {} }],
                        where: age_group ? { age_group } : {}
                    }]
                }
            ],
            order: [['goals', 'DESC']],
            limit: 10
        });

        const leaderboard = stats.map((stat, index) => ({
            rank: index + 1,
            player_id: stat.Player.player_id,
            name: `${stat.Player.first_name} ${stat.Player.last_name}`,
            club: stat.Player.Team?.Club?.name || 'N/A',
            age_group: stat.Player.Team?.age_group,
            goals: stat.goals
        }));

        res.json({ leaderboard });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch leaderboard' });
    }
});

module.exports = router;