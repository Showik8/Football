type Matches = {
  Home: string;
  Away: string;
  date: string;
  time: string;
};

type News = {
  photo_url: string;
  text: string;
};

type TeamRow = {
  team: { name: string; id: number };
  club: string;
  completed_matches: number;
  won: number;
  drawn: number;
  lost: number;
  goals_for: number;
  goals_against: number;
  goal_difference: number;
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
  age: number;
  nationality?: string;
  height?: number;
  weight?: number;
  date_of_birth: string;
  statistics: statistics[];
  team: string;
  assists: number;
  competition: string;
  created_at: data;
  goals: number;
  matches_played: number;
  player_id: number;
  red_cards: number;
  season: string;
  updated_at: data;
  views: number;
  yellow_cards: number;
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
