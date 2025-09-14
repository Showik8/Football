import React from "react";

type Params = {
  teamId: string;
};

async function Page({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  const parseParams = resolvedParams.teamId;

  return <h1>{parseParams}</h1>;
}

export default Page;
