import { type FC } from "react";
import { useData } from "../hooks/useData";
import { PieChart } from "../components/PieChart";
import { Indicator } from "../components/Indicator";

export const Home: FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Historique des Jeux Olympiques - TéléSport
        </h1>

        <div className="mb-8">
          <p className="text-lg">
            Bienvenue sur la page dédiée à l'historique des Jeux Olympiques.
            Explorez les performances des pays au fil des années.
          </p>
        </div>

        {/* Anti-pattern 8 — Cartes dupliquées — extraire en composant réutilisable (Indicator.tsx). */}
        <div className="mb-2">
          <Indicator
            title="Pays participants"
            value={useData().totalParticipatingCountries}
          />
          <Indicator
            title="Éditions des JO"
            value={useData().totalGamesEditions}
          />
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
          <PieChart />
        </div>

        <div className="text-sm text-gray-400">
          <p>Cliquez sur un pays pour voir ses détails</p>
        </div>
      </div>
    </div>
  );
};
