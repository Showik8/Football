const express = require("express");
const { Club, Team } = require("../models");
const router = express.Router();

// Get all clubs with optional region filter
router.get("/", async (req, res) => {
  try {
    const { region } = req.query;
    const where = region ? { region } : {};

    const clubs = await Club.findAll({
      where,
      include: [{ model: Team, attributes: ["team_id", "age_group"] }],
      attributes: ["club_id", "name", "region", "academy_status"],
    });

    const clubData = clubs.map((club) => ({
      id: club.club_id,
      name: club.name,
      region: club.region,
      academy_status: club.academy_status,
      teams: club.Teams.map((team) => ({
        team_id: team.team_id,
        age_group: team.age_group,
      })),
    }));

    res.json({ clubs: clubData });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch clubs" });
  }
});

// Get club by ID
router.get("/:id", async (req, res) => {
  try {
    const club = await Club.findByPk(req.params.id, {
      include: [
        { model: Team, attributes: ["team_id", "age_group", "coach_name"] },
      ],
      attributes: ["club_id", "name", "region", "academy_status"],
    });

    if (!club) return res.status(404).json({ error: "Club not found" });

    const clubData = {
      id: club.club_id,
      name: club.name,
      region: club.region,
      academy_status: club.academy_status,
      teams: club.Teams.map((team) => ({
        team_id: team.team_id,
        age_group: team.age_group,
        coach_name: team.coach_name,
      })),
    };

    res.json(clubData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch club" });
  }
});

// Add a new club
router.post("/", async (req, res) => {
  try {
    const { name, region, academy_status } = req.body;

    if (!name || !region) {
      return res
        .status(400)
        .json({ error: "Missing required fields: name, region" });
    }

    const club = await Club.create({
      name,
      region,
      academy_status: academy_status || false,
    });

    res.status(201).json({
      message: "Club added successfully",
      club: {
        id: club.club_id,
        name: club.name,
        region: club.region,
        academy_status: club.academy_status,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to add club: " + error.message });
  }
});

module.exports = router;
