import { GetAccountByPUUID } from "@/actions/accounts";
import { GetMatchlist } from "@/actions/matches";
import Match from "@/components/Match";
import React from "react";

const page = async ({ params }: { params: { puuid: string } }) => {
  const matches = await GetMatchlist(params.puuid);
  const account = await GetAccountByPUUID({ puuid: params.puuid });

  return (
    <div className="">
      <div>
        {account.gameName}#{account.tagLine}
      </div>
      <div className="">
        {matches.map((match: string) => (
          <Match key={match} id={match} />
        ))}
      </div>
    </div>
  );
};

export default page;
