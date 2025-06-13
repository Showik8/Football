const { Club, Team, Player, Statistics } = require("./models");

async function seed() {
  const club = await Club.create({
    name: "Dinamo Tbilisi",
    region: "Tbilisi",
    academy_status: true,
  });

  const team = await Team.create({
    club_id: club.id,
    age_group: "U17",
    coach_name: "Giorgi Nemsadze",
  });

  const player = await Player.create({
    team_id: team.id,
    first_name: "Luka",
    last_name: "Gagnidze",
    birth_date: "2006-02-15",
    position: "Midfielder",
    height: 175,
    status: "active",
  });

  await Statistics.create({
    player_id: player.id,
    season: "2024/2025",
    matches_played: 10,
    goals: 5,
    assists: 3,
  });

  console.log("Database seeded");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
