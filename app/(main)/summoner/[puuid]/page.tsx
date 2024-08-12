import { GetAccountByPUUID } from "@/actions/accounts";
import { GetMatchlist } from "@/actions/matches";
import { getCurrentLeagueVersion } from "@/actions/version";
import Match from "@/components/Match";
import React from "react";

const page = async ({ params }: { params: { puuid: string } }) => {
  const matches = await GetMatchlist(params.puuid);
  const account = await GetAccountByPUUID({ puuid: params.puuid });

  return (
    <div className="flex flex-col items-center justify-center p-4 w-full">
      <div>
        <span className="font-extrabold">{account.gameName}</span>#
        {account.tagLine}
      </div>
      <div className="w-full grid grid-cols-1  lg:grid-cols-2 gap-2">
        {matches.map((match: string) => (
          <Match key={match} id={match} />
        ))}
      </div>
    </div>
  );
};

export default page;
