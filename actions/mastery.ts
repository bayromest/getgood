"use server";

import axios from "axios";

const apiKey = process.env.RIOT_API_KEY;

export async function getChampionMasteryByPUUIDAndChampionId({
  puuid,
  championId,
}: {
  puuid: string;
  championId: number;
}) {
  try {
    const response = await axios.get(
      `https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/by-champion/${championId}`,
      {
        headers: {
          "X-Riot-Token": apiKey,
        },
      }
    );
    return response.data.championPoints;
  } catch (error) {
    console.error(
      "Error fetching champion mastery by PUUID and champion ID:",
      error
    );
    throw new Error(
      error.response
        ? error.response.data.status.message
        : "An unknown error occurred"
    );
  }
}
