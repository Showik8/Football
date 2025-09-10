import React from "react";
import PlayerProfile from "./PlayerProfile";
import fetchPlayer from "@/app/utils/fetchPlayer";

type Params = {
  playerId: string;
};

async function Page({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  const parseParams = resolvedParams.playerId;
  const player = await fetchPlayer(parseParams);

  if (!player) return <div>Player not found</div>;

  return <PlayerProfile player={player} />;
}

export default Page;
