import { useEffect, useState } from "react";
import { olympicsData } from "../data/olympicsData.json";
import type { Olympic } from "../models/olympicDataTypes";

export const useData = () => {
  const [data, setData] = useState<Olympic[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(olympicsData);
      setIsLoading(false);
    }, 500);
  }, []);

  const totalParticipatingCountries = data ? data.length : 0;
  const totalGamesEditions = 5;

  return {
    data,
    totalParticipatingCountries,
    totalGamesEditions,
    isLoading,
  };
};
