import React from "react";
import { GetMatchById } from "@/actions/matches";
import { MatchDto } from "@/types/MatchDto";
import Link from "next/link";

const Match = async ({ id }: { id: string }) => {
  const match: MatchDto = await GetMatchById(id);

  return (
    <Link href={`/match/${id}`}>
      <div>
        <h1>{match?.info.gameMode}</h1>
        <p>Game Mode: {match?.info.gameMode}</p>
      </div>
    </Link>
  );
};

export default Match;
