import { GetMatchById } from "@/actions/matches";
import { MatchDto, ParticipantDto } from "@/types/MatchDto";
import Participant from "../_components/Participant/Participant";

interface MatchPageProps {
  params: { id: string };
}

const MatchPage = async ({ params }: MatchPageProps) => {
  const match: MatchDto = await GetMatchById(params.id);

  return (
    <div className="p-4 md:p-8 xl:p-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {match.info.participants.map((participant: ParticipantDto, index) => (
          <Participant key={participant.puuid} participant={participant} />
        ))}
      </div>
    </div>
  );
};
export default MatchPage;
