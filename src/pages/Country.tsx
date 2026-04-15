import type { FC } from "react";
import { useParams } from "react-router-dom";
import { olympicsData } from "../data/olympicsData.json";
import type { Olympic, Participation } from "../models/olympicDataTypes";
import { LineChart } from "../components/LineChart";
import { Indicator } from "../components/Indicator";

export const Country: FC = () => {
  const { id } = useParams();

  const country: Olympic | undefined = olympicsData.find(
    (c: Olympic) => c.id === Number(id),
  );

  const totalMedals = country?.participations.reduce(
    (sum: number, p: Participation) => sum + p.medalsCount,
    0,
  );
  const totalAthletes = country?.participations.reduce(
    (sum: number, p: Participation) => sum + p.athleteCount,
    0,
  );
  const totalParticipations = country?.participations.length;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{country?.countryName}</h1>

        <div className="mb-2">
          <Indicator title="Participations" value={totalParticipations ?? 0} />
          <Indicator title="Total médailles" value={totalMedals ?? 0} />
          <Indicator title="Total athlètes" value={totalAthletes ?? 0} />
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
          <div style={{ height: "400px" }}>
            <LineChart selectedCountry={country} />
          </div>
        </div>

        <div className="text-sm text-gray-400">
          <p>Données des 5 dernières éditions des Jeux Olympiques</p>
        </div>
      </div>
    </div>
  );
};
