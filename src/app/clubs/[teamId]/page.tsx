import { getTeamData } from "./mock-data";
import TeamSquadClientWrapper from "./team-squad/TeamSquadClientWrapper";

type Params = {
  teamId: string;
};

export default async function Page({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  const parseParams = resolvedParams.teamId;
  const teamData = await getTeamData(parseParams);

  if (!teamData) return <div>Team not found</div>;
  return (
    <main className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 md:p-8">
      <TeamSquadClientWrapper teamData={teamData} />
    </main>
  );
}
