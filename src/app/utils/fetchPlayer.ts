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

export default async function fetchPlayer(id: string): Promise<Player | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_URL;

    if (!baseUrl) {
      throw new Error("NEXT_PUBLIC_URL is not defined");
    }

    const res = await fetch(`${baseUrl}/players/${id}`);

    if (!res.ok) {
      throw new Error(
        `Failed to fetch player with id ${id}: ${res.statusText}`
      );
    }

    const data: Player = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching player:", error);
    return null;
  }
}
