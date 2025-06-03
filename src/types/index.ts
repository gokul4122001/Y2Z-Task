export type ActivityType = 'dining' | 'attraction' | 'transport' | 'accommodation';

export interface Activity {
  id: string;
  title: string;
  time: string;
  description: string;
  type: ActivityType;
  location?: string;
  duration?: string;
}

export interface DayItinerary {
  id: string;
  date: string;
  title: string;
  activities: Activity[];
}

export interface Itinerary {
  id: string;
  title: string;
  destination: string;
  days: DayItinerary[];
}