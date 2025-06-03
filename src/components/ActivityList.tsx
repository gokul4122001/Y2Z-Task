import React from 'react';
import { Activity } from '../types';
import SortableActivityList from './SortableActivityList';
import { useItinerary } from '../contexts/ItineraryContext';

interface ActivityListProps {
  dayId: string;
  activities: Activity[];
}

const ActivityList: React.FC<ActivityListProps> = ({ dayId, activities }) => {
  const { updateDayActivities } = useItinerary();

  const handleActivitiesReorder = (reorderedActivities: Activity[]) => {
    updateDayActivities(dayId, reorderedActivities);
  };

  return (
    <div>
      <SortableActivityList 
        activities={activities} 
        onReorder={handleActivitiesReorder} 
      />
    </div>
  );
};

export default ActivityList;