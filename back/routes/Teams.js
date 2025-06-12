const express = require("express");
const { Team, Club, Player } = require("../models");
const router = express.Router();

// Get all teams with optional age_group filter
router.get("/", async (req, res) => {
  try {
    const { age_group } = req.query;
    const where = age_group ? { age_group } : {};

    const teams = await Team.findAll({
      where,
      include: [
        { model: Club, attributes: ["club_id", "name", "region"] },
        { model: Player, attributes: ["player_id", "first_name", "last_name"] },
      ],
      attributes: ["team_id", "age_group", "coach_name"],
    });

    const teamData = teams.map((team) => ({
      id: team.team_id,
      age_group: team.age_group,
      coach_name: team.coach_name,
      club: team.Club
        ? {
            id: team.Club.club_id,
            name: team.Club.name,
            region: team.Club.region,
          }
        : null,
      players: team.Players.map((player) => ({
        id: player.player_id,
        name: `${player.first_name} ${player.last_name}`,
      })),
    }));

    res.json({ teams: teamData });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch teams" });
  }
});

// Get team by ID
router.get("/:id", async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.id, {
      include: [
        { model: Club, attributes: ["club_id", "name", "region"] },
        {
          model: Player,
          attributes: ["player_id", "first_name", "last_name", "position"],
        },
      ],
      attributes: ["team_id", "age_group", "coach_name"],
    });

    if (!team) return res.status(404).json({ error: "Team not found" });

    const teamData = {
      id: team.team_id,
      age_group: team.age_group,
      coach_name: team.coach_name,
      club: team.Club
        ? {
            id: team.Club.club_id,
            name: team.Club.name,
            region: team.Club.region,
          }
        : null,
      players: team.Players.map((player) => ({
        id: player.player_id,
        name: `${player.first_name} ${player.last_name}`,
        position: player.position,
      })),
    };

    res.json(teamData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch team" });
  }
});

module.exports = router;
