import { useEffect, useState } from "react";
import { olympicsData } from "../data/olympicsData.json";
import type { Olympic } from "../models/olympicDataTypes";

export const useData = () => {
  const [data, setData] = useState<Olympic[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(olympicsData);
      setIsLoading(false);
    }, 500);
  }, []);

  const totalParticipatingCountries = data ? data.length : 0;
  const totalGamesEditions = data.reduce((years, country) => {
    country.participations.forEach((p) => years.add(p.year));
    return years;
  }, new Set<number>()).size;

  return {
    data,
    totalParticipatingCountries,
    totalGamesEditions,
    isLoading,
  };
};
