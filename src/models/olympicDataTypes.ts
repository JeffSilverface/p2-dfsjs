export interface Participation {
  id: number;
  year: number;
  city: string;
  medalsCount: number;
  athleteCount: number;
}
export interface Olympic {
  id: number;
  countryName: string;
  participations: Participation[];
}

export interface IndicatorProps {
  title: string;
  value: number;
}
