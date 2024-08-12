import React from "react";
import { GetMatchById } from "@/actions/matches";
import { MatchDto } from "@/types/MatchDto";
import Link from "next/link";

const Match = async ({ id }: { id: string }) => {
  const match: MatchDto = await GetMatchById(id);

  return (
    <Link href={`/match/${id}`} className="border p-4 rounded w-full">
      <div className="grid grid-cols-2 lg:grid-cols-5 w-full gap-6">
        {match.info.participants.map((participant) => (
          <div key={participant.puuid} className="flex flex-col items-center">
            <div className="">{participant.championName}</div>
            <div className="text-xs font-extrabold text-center">
              {participant.summonerName}
            </div>
          </div>
        ))}
      </div>
    </Link>
  );
};

export default Match;
