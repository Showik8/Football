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
  topGoalScorers: Player[];
  topAssists: Player[];
  topViewers: Player[];
  topMatchPlayed: Player[];
};

export type Player = {
  id: number;
  name: string;
  jersey: number;
  position: "Goalkeeper" | "Defender" | "Midfielder" | "Forward" | string;
  team: string;
  age?: number;
  nationality?: string;
  goal: number;
  assist: number;
  match_played?: number;
  view: number;
  yellow_cards?: number;
  red_cards?: number;
  height?: number;
  weight?: number;
  photo_url?: string;
};

export type { Matches, News, TeamRow, Statistics };
