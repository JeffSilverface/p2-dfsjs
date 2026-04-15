import { Pie } from "react-chartjs-2";
import { useData } from "../hooks/useData";
import type { Olympic, Participation } from "../models/olympicDataTypes";

export const PieChart = () => {
  const calculateTotalMedals = (country: Olympic) => {
    return country.participations.reduce(
      (sum: number, p: Participation) => sum + p.medalsCount,
      0,
    );
  };

  const chartData = {
    labels: useData().data?.map((d: Olympic) => d.countryName),
    datasets: [
      {
        label: "Total des médailles",
        data: useData().data?.map((d: Olympic) => calculateTotalMedals(d)),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          color: "white",
        },
      },
    },
  };

  return (
    <div style={{ height: "400px" }}>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};
