import type { Player } from "../types";

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
