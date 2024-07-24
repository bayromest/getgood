"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { getCurrentLeagueVersion } from "@/actions/version";

interface LeagueVersionContextProps {
  version: string | null;
  error: string | null;
}

const LeagueVersionContext = createContext<
  LeagueVersionContextProps | undefined
>(undefined);

export const LeagueVersionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [version, setVersion] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedVersion = await getCurrentLeagueVersion();
        setVersion(fetchedVersion);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      }
    }

    fetchData();
  }, []);

  return (
    <LeagueVersionContext.Provider value={{ version, error }}>
      {children}
    </LeagueVersionContext.Provider>
  );
};

export const useLeagueVersion = (): LeagueVersionContextProps => {
  const context = useContext(LeagueVersionContext);
  if (!context) {
    throw new Error(
      "useLeagueVersion must be used within a LeagueVersionProvider"
    );
  }
  return context;
};
