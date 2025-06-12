const express = require("express");
const { Player, Team, Club, Statistics } = require("../models");
const router = express.Router();

// Get all players with filters
router.get("/", async (req, res) => {
  try {
    const { age_group, position, region } = req.query;
    const where = {};
    if (position) where.position = position;

    const players = await Player.findAll({
      include: [
        {
          model: Team,
          include: [{ model: Club, where: region ? { region } : {} }],
          where: age_group ? { age_group } : {},
        },
      ],
      attributes: [
        "player_id",
        "first_name",
        "last_name",
        "birth_date",
        "position",
      ],
    });

    const playerData = players.map((player) => ({
      id: player.player_id,
      name: `${player.first_name} ${player.last_name}`,
      age: Math.floor(
        (new Date() - new Date(player.birth_date)) / (1000 * 60 * 60 * 24 * 365)
      ),
      position: player.position,
      club: player.Team?.Club?.name || "N/A",
    }));

    res.json({ players: playerData });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch players" });
  }
});

// Get player profile by ID
router.get("/:id", async (req, res) => {
  try {
    const player = await Player.findByPk(req.params.id, {
      include: [
        { model: Team, include: [Club] },
        { model: Statistics, where: { season: "2024/2025" }, required: false },
      ],
    });

    if (!player) return res.status(404).json({ error: "Player not found" });

    const playerData = {
      id: player.player_id,
      name: `${player.first_name} ${player.last_name}`,
      age: Math.floor(
        (new Date() - new Date(player.birth_date)) / (1000 * 60 * 60 * 24 * 365)
      ),
      position: player.position,
      height: player.height,
      club: player.Team?.Club?.name || "N/A",
      age_group: player.Team?.age_group,
      stats: player.Statistics.length
        ? {
            matches_played: player.Statistics[0].matches_played,
            goals: player.Statistics[0].goals,
            assists: player.Statistics[0].assists,
          }
        : {},
    };

    res.json(playerData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch player" });
  }
});

// Add a new player
router.post("/", async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      birth_date,
      position,
      height,
      team_id,
      stats,
    } = req.body;

    // Validate required fields
    if (!first_name || !last_name || !birth_date || !team_id) {
      return res.status(400).json({
        error:
          "Missing required fields: first_name, last_name, birth_date, team_id",
      });
    }

    // Check if team_id exists
    const team = await Team.findByPk(team_id);
    if (!team) {
      return res.status(400).json({ error: "Invalid team_id" });
    }

    // Create player
    const player = await Player.create({
      team_id,
      first_name,
      last_name,
      birth_date,
      position,
      height,
      status: "active",
    });

    // Create statistics if provided
    if (stats && (stats.matches_played || stats.goals || stats.assists)) {
      await Statistics.create({
        player_id: player.player_id,
        season: stats.season || "2024/2025",
        matches_played: stats.matches_played || 0,
        goals: stats.goals || 0,
        assists: stats.assists || 0,
      });
    }

    res.status(201).json({
      message: "Player added successfully",
      player: {
        id: player.player_id,
        name: `${player.first_name} ${player.last_name}`,
        team_id: player.team_id,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to add player: " + error.message });
  }
});

module.exports = router;
