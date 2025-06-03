import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import ActivityCard from './ActivityCard';
import { Activity } from '../types';

interface SortableActivityCardProps {
  activity: Activity;
}

const SortableActivityCard: React.FC<SortableActivityCardProps> = ({ activity }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: activity.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="activity-enter"
    >
      <ActivityCard 
        activity={activity} 
        isDragging={isDragging} 
      />
    </div>
  );
};

export default SortableActivityCard;