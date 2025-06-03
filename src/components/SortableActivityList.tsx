import React, { useEffect } from 'react';
import { 
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverlay,
  DragStartEvent
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { Activity } from '../types';
import SortableActivityCard from './SortableActivityCard';
import ActivityCard from './ActivityCard';

interface SortableActivityListProps {
  activities: Activity[];
  onReorder: (activities: Activity[]) => void;
}

const SortableActivityList: React.FC<SortableActivityListProps> = ({ 
  activities,
  onReorder
}) => {
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const [items, setItems] = React.useState<Activity[]>(activities);
  
  // Update local state when external activities change
  useEffect(() => {
    setItems(activities);
  }, [activities]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5, // 5px movement required before drag starts
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250, // 250ms delay for touch devices
        tolerance: 5, // 5px movement allowed during delay
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      const oldIndex = items.findIndex(item => item.id === active.id);
      const newIndex = items.findIndex(item => item.id === over.id);
      
      const newItems = arrayMove(items, oldIndex, newIndex);
      setItems(newItems);
      onReorder(newItems);
    }
    
    setActiveId(null);
  };

  const activeItem = activeId ? items.find(item => item.id === activeId) : null;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext 
        items={items.map(item => item.id)} 
        strategy={verticalListSortingStrategy}
      >
        <div>
          {items.map(activity => (
            <SortableActivityCard 
              key={activity.id} 
              activity={activity} 
            />
          ))}
        </div>
      </SortableContext>
      
      <DragOverlay className="draggable-overlay">
        {activeItem ? (
          <ActivityCard 
            activity={activeItem} 
            isDragging={true} 
          />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default SortableActivityList;