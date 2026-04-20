import { useData } from "../hooks/useData";
import { PieChart } from "../components/PieChart";
import { Indicator } from "../components/Indicator";
import { centered } from "../styles/constants";

export const DashboardPage = () => {
  const { totalParticipatingCountries, totalGamesEditions, isLoading } =
    useData();

  if (isLoading) return <div className={centered}>Chargement...</div>;

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-lg">
            Bienvenue sur la page dédiée à l'historique des Jeux Olympiques.
            Explorez les performances des pays au fil des années.
          </p>
        </div>

        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Indicator
            title="Pays participants"
            value={totalParticipatingCountries}
          />
          <Indicator title="Éditions des JO" value={totalGamesEditions} />
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
