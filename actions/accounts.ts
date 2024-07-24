"use server";

import axios from "axios";

const apiKey = process.env.RIOT_API_KEY;

export async function GetAccountByRiotId({
  gameName,
  tagLine,
}: {
  gameName: string;
  tagLine: string;
}) {
  try {
    const response = await axios.get(
      `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`,
      {
        headers: {
          "X-Riot-Token": apiKey,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching account by Riot ID:",
      error instanceof Error ? error.message : error
    );
    return {
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}

export async function GetAccountPUUIDByRiotId({
  gameName,
  tagLine,
}: {
  gameName: string;
  tagLine: string;
}) {
  try {
    const response = await axios.get(
      `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`,
      {
        headers: {
          "X-Riot-Token": apiKey,
        },
      }
    );
    return response.data.puuid;
  } catch (error) {
    console.error(
      "Error fetching account by Riot ID:",
      error instanceof Error ? error.message : error
    );
    return {
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}
