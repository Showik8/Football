// src/lib/mock-data.ts
import { TeamPageData } from "./types";
import logo from "./dinamoBatumi.png";
import kvara from "./kvara.webp";

const dinamoBatumiData: TeamPageData = {
  teamName: "Dinamo Batumi",
  academyName: "Dinamo Batumi Academy",
  logoUrl: logo,

  // 1. squadStats
  squadStats: [
    { label: "total players", value: 12, icon: "Users" },
    { label: "average age", value: "16.5", icon: "Cake" },
    { label: "legionnaires", value: 4, icon: "Globe" },
    { label: "wins in season", value: "75%", icon: "Trophy" },
  ],

  squads: [
    {
      category: "U-19",
      stats: {
        matchesPlayed: 28,
        goalsScored: 62,
        cleanSheets: 10,
        winRate: 78,
      },
      players: [
        // 2. players
        {
          id: 101,
          name: "Marc Casadó",
          age: 19,
          nationality: "Spain",
          position: "Midfielder",
          jerseyNumber: 6,
          photoUrl: kvara,
        },
        {
          id: 102,
          name: "Álex Valle",
          age: 19,
          nationality: "Spain",
          position: "Defender",
          jerseyNumber: 3,
          photoUrl: kvara,
        },
      ],
    },
    {
      category: "U-17",
      stats: {
        matchesPlayed: 25,
        goalsScored: 55,
        cleanSheets: 9,
        winRate: 72,
      },
      players: [
        {
          id: 201,
          name: "Pau Prim",
          age: 17,
          nationality: "Spain",
          position: "Midfielder",
          jerseyNumber: 8,
          photoUrl: kvara,
        },
      ],
    },
    {
      category: "U-15",
      stats: {
        matchesPlayed: 20,
        goalsScored: 45,
        cleanSheets: 8,
        winRate: 65,
      },
      players: [
        {
          id: 1,
          name: "Alex Pérez",
          age: 15,
          nationality: "Spain",
          position: "Goalkeeper",
          jerseyNumber: 1,
          photoUrl: kvara,
        },
        {
          id: 2,
          name: "Gerard Martin",
          age: 15,
          nationality: "Spain",
          position: "Defender",
          jerseyNumber: 2,
          photoUrl: kvara,
        },
        {
          id: 3,
          name: "Jordi Escobar",
          age: 15,
          nationality: "Spain",
          position: "Defender",
          jerseyNumber: 3,
          photoUrl: kvara,
        },
        {
          id: 4,
          name: "Arnau Pradas",
          age: 15,
          nationality: "Spain",
          position: "Defender",
          jerseyNumber: 4,
          photoUrl: kvara,
        },
        {
          id: 5,
          name: "Dani Pérez",
          age: 15,
          nationality: "Spain",
          position: "Midfielder",
          jerseyNumber: 5,
          photoUrl: kvara,
        },
        {
          id: 6,
          name: "Noah Darvich",
          age: 15,
          nationality: "Germany",
          position: "Midfielder",
          jerseyNumber: 6,
          photoUrl: kvara,
        },
        {
          id: 7,
          name: "Ángel Alarcón",
          age: 15,
          nationality: "Spain",
          position: "Midfielder",
          jerseyNumber: 7,
          photoUrl: kvara,
        },
        {
          id: 8,
          name: "Landry Farré",
          age: 15,
          nationality: "France",
          position: "Forward",
          jerseyNumber: 8,
          photoUrl: kvara,
        },
        {
          id: 9,
          name: "Iker Almena",
          age: 15,
          nationality: "Spain",
          position: "Forward",
          jerseyNumber: 9,
          photoUrl: kvara,
        },
        {
          id: 10,
          name: "Ilias Akhomach",
          age: 15,
          nationality: "Morocco",
          position: "Forward",
          jerseyNumber: 10,
          photoUrl: kvara,
        },
      ],
    },
    {
      category: "U-21",
      stats: {
        matchesPlayed: 30,
        goalsScored: 70,
        cleanSheets: 12,
        winRate: 80,
      },
      players: [],
    },
  ],
};

export const getTeamData = async (teamId: string): Promise<TeamPageData> => {
  console.log(`Fetching data for team: ${teamId}...`);
  // server loading imitation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dinamoBatumiData);
    }, 1500);
  });
};
