import { useParams, Link } from "react-router-dom";
import type { Olympic, Participation } from "../models/olympicDataTypes";
import { LineChart } from "../components/LineChart";
import { Indicator } from "../components/Indicator";
import { useData } from "../hooks/useData";
import { centered } from "../styles/constants";

export const CountryDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useData();

  if (isLoading) return <div className={centered}>Chargement...</div>;

  const country: Olympic | undefined = data?.find(
    (c: Olympic) => c.id === Number(id),
  );

  if (!country) return <div className={centered}>Pays introuvable.</div>;

  const totalMedals = country.participations.reduce(
    (sum: number, p: Participation) => sum + p.medalsCount,
    0,
  );
  const totalAthletes = country?.participations.reduce(
    (sum: number, p: Participation) => sum + p.athleteCount,
    0,
  );
  const totalParticipations = country?.participations.length;

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-row items-center mb-8">
          <Link to="/" className="text-3xl me-4">
            {"<-"}
          </Link>
          <h1 className="text-2xl md:text-4xl font-bold ">
            {country?.countryName}
          </h1>
        </div>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
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
