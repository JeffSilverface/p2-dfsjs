import { useEffect, useState } from "react";
import { olympicsData } from "../data/olympicsData.json";
import type { Olympic } from "../models/olympicDataTypes";

export const useData = () => {
  const [data, setData] = useState<Olympic[] | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setData(olympicsData);
    }, 500);
  }, []);

  const totalParticipatingCountries = data ? data.length : 0;
  const totalGamesEditions = 5;

  return {
    data,
    totalParticipatingCountries,
    totalGamesEditions,
  };
};
