"use server";

import axios from "axios";
import { getCurrentLeagueVersion } from "@/actions/version";

interface Champion {
  id: string;
  key: string; // This is the champion's numeric ID as a string
  name: string;
  title: string;
  [key: number]: any;
}

interface ChampionData {
  [key: number]: Champion;
}

export async function getChampions(): Promise<ChampionData> {
  try {
    // Fetch the current League of Legends version
    const version = await getCurrentLeagueVersion();

    // Fetch the champion data using the latest version
    const response = await axios.get<ChampionData>(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching champion data:", error);
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
}
