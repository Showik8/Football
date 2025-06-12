const express = require("express");
const cors = require("cors");
const { syncDatabase } = require("./models");
const playerRoutes = require("./routes/players");
const leaderboardRoutes = require("./routes/leaderboards");
const clubRoutes = require("./routes/Clubs");
const teamRoutes = require("./routes/teams");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/players", playerRoutes);
app.use("/api/leaderboards", leaderboardRoutes);
app.use("/api/clubs", clubRoutes);
app.use("/api/teams", teamRoutes);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "Server is running" });
});

// Start server
syncDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to sync database:", err);
  });
