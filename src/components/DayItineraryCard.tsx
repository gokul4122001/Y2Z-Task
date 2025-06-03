import React from 'react';
import { DayItinerary } from '../types';
import ActivityList from './ActivityList';
// import { Calendar } from 'lucide-react';

interface DayItineraryCardProps {
  day: DayItinerary;
}

const DayItineraryCard: React.FC<DayItineraryCardProps> = ({ day }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col">
      {/* <div className="bg-blue-500 p-4 text-white">
        <div className="flex items-center gap-2 mb-1">
          <Calendar size={18} />
          <span className="font-medium">{day.date}</span>
        </div>
        <h3 className="text-xl font-semibold">{day.title}</h3>
        <p className="text-blue-100">{day.activities.length} activities</p>
      </div> */}
      
      <div className="p-4 flex-grow overflow-y-auto">
        <ActivityList dayId={day.id} activities={day.activities} />
      </div>
    </div>
  );
};

export default DayItineraryCard;