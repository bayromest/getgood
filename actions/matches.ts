"use server";

import { MatchDto } from "@/types/MatchDto";
import axios from "axios";
const apiKey = process.env.RIOT_API_KEY;

export async function GetMatchlist(puuid: string) {
  if (!apiKey) {
    throw new Error("API key is missing");
  }
  if (!puuid) {
    throw new Error("PUUID is required");
  }

  try {
    // Correct endpoint for fetching match IDs by PUUID
    const response = await axios.get(
      `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=10`,
      {
        headers: {
          "X-Riot-Token": apiKey,
        },
      }
    );
    // Return the data as received
    return response.data;
  } catch (error) {
    // Handle and log error details
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response?.data || error.message);
    } else {
      console.error("Unknown Error:", error);
    }
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
}

export async function GetMatchById(id: string) {
  if (!apiKey) {
    throw new Error("API key is missing");
  }
  if (!id) {
    throw new Error("id is required");
  }

  try {
    // Correct endpoint for fetching match IDs by PUUID
    const response = await axios.get<MatchDto>(
      `https://europe.api.riotgames.com/lol/match/v5/matches/${id}`,
      {
        headers: {
          "X-Riot-Token": apiKey,
        },
      }
    );
    // Return the data as received
    return response.data;
  } catch (error) {
    // Handle and log error details
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response?.data || error.message);
    } else {
      console.error("Unknown Error:", error);
    }
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
}
