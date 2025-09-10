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
  team: string;
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
  matchPlayed?: number;
  view: number;
  yellowCards?: number;
  redCards?: number;
  height?: number;
  weight?: number;
  photoUrl?: string;
};

export type { Matches, News, TeamRow, Statistics };
