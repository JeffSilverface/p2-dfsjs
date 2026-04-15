import { Line } from "react-chartjs-2";
import type { Olympic, Participation } from "../models/olympicDataTypes";

export const LineChart = ({
  selectedCountry,
}: {
  selectedCountry: Olympic | undefined;
}) => {
  const evolutionData = {
    labels: selectedCountry?.participations.map((p: Participation) =>
      p.year.toString(),
    ),
    datasets: [
      {
        label: "Nombre de médailles",
        data: selectedCountry?.participations.map(
          (p: Participation) => p.medalsCount,
        ),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
      },
    ],
  };

  const evolutionOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "white",
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
  };

  return (
    <div style={{ height: "400px" }}>
      <Line data={evolutionData} options={evolutionOptions} />
    </div>
  );
};
