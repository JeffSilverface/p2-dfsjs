import type { IndicatorProps } from "../models/props";

export const Indicator = ({ title, value }: IndicatorProps) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
      <h3 className="text-xl font-semibold mb-2">{title} </h3>
      <p className="text-4xl font-bold text-green-400">{value}</p>
    </div>
  );
};
