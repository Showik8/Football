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
};

type data = {
  player: Player;
  goal?: number;
  assists?: number;
  views: number;
  matches_played?: number;
};
export type { Matches, News, TeamRow, Statistics };
