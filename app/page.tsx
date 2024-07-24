import { GetAccountByRiotId } from "@/actions/accounts";
import React from "react";

const Home = async () => {
  const summoner = await GetAccountByRiotId({
    gameName: "Be lerton",
    tagLine: "MAY",
  });
  console.log(summoner);
  return <div>Home</div>;
};

export default Home;
