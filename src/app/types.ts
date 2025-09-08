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

type Player = {
  id: number;
  name: string;
  jersey: number;
  goal: number;
  matchPlayed?: number;
  assist: number;
  view: number;
};

export type { Matches, News, TeamRow, Statistics };
