import React from 'react';
import { useItinerary } from '../contexts/ItineraryContext';
import DayItineraryCard from './DayItineraryCard';

const ItineraryPlanner: React.FC = () => {
  const { itinerary } = useItinerary();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* <div className="mb-8 text-center w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-gray-900">{itinerary.title}</h2>
        <p className="text-xl text-gray-600">
          {itinerary.destination} • {itinerary.days.length} days
        </p>
      </div> */}
      
      <div className="w-[98%] h-[98%] grid ">
        {itinerary.days.map(day => (
          <DayItineraryCard key={day.id} day={day} />
        ))}
      </div>
    </div>
  );
};

export default ItineraryPlanner;
