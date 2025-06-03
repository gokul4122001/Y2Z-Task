import React, { createContext, useState, useContext, ReactNode } from 'react';
import { mockItinerary } from '../data/mockData';
import { Itinerary, DayItinerary, Activity } from '../types';

interface ItineraryContextType {
  itinerary: Itinerary;
  updateDayActivities: (dayId: string, activities: Activity[]) => void;
}

const ItineraryContext = createContext<ItineraryContextType | undefined>(undefined);

export const useItinerary = () => {
  const context = useContext(ItineraryContext);
  if (!context) {
    throw new Error('useItinerary must be used within an ItineraryProvider');
  }
  return context;
};

interface ItineraryProviderProps {
  children: ReactNode;
}

export const ItineraryProvider: React.FC<ItineraryProviderProps> = ({ children }) => {
  const [itinerary, setItinerary] = useState<Itinerary>(mockItinerary);

  const updateDayActivities = (dayId: string, activities: Activity[]) => {
    setItinerary(prev => {
      const updatedDays = prev.days.map(day => 
        day.id === dayId ? { ...day, activities } : day
      );
      
      return {
        ...prev,
        days: updatedDays
      };
    });
  };

  return (
    <ItineraryContext.Provider value={{ itinerary, updateDayActivities }}>
      {children}
    </ItineraryContext.Provider>
  );
};