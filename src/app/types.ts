/* eslint-disable @typescript-eslint/no-explicit-any */
type Matches = {
  Home: string;
  Away: string;
  date: string;
  time: string;
};

type News = {
  text: string;
  photo_url: string;
};

type TeamRow = {
  teamId: number;
  club: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  for: number;
  against: number;
  goalDifference: number;
  points: number;
};

type Statistics = {
  topGoalScorers: data[];
  topAssists: data[];
  topViewers: data[];
  topMatchPlayed: data[];
};

export type Player = {
  id: number;
  name: string;
  jersey: number;
  position: "Goalkeeper" | "Defender" | "Midfielder" | "Forward" | string;
  nationality?: string;
  height?: number;
  weight?: number;
  date_of_birth: string;
  statistics: statistics[];
  team_players?: any;
};

type data = {
  player: Player;
  goal?: number;
  assists?: number;
  views: number;
  matches_played?: number;
};

type statistics = {
  assists: number;
  competition: string;
  created_at: data;
  goals: number;
  id: number;
  matches_played: number;
  player_id: number;
  red_cards: number;
  season: string;
  updated_at: data;
  views: number;
  yellow_cards: number;
};
export type { Matches, News, TeamRow, Statistics };
