"use server";

import axios from "axios";

export async function getCurrentLeagueVersion(): Promise<string> {
  try {
    const response = await axios.get<string[]>(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );
    // The first item in the array is the latest version
    return response.data[0];
  } catch (error) {
    console.error(
      "Error fetching the current League of Legends version:",
      error
    );
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
}
