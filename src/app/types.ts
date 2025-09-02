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
export type { Matches, News, TeamRow };
