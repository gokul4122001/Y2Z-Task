import React, { useState } from 'react';
import { Activity } from '../types';
import {
  MapPin, Pencil, Trash2, Upload, Star
} from 'lucide-react';

interface ActivityCardProps {
  activity: Activity;
  onEdit?: (updated: Activity) => void;
  onDelete?: (activity: Activity) => void;
  onUpdate?: (activity: Activity) => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, onEdit, onDelete, onUpdate }) => {
  const [isEditingDesc, setIsEditingDesc] = useState(false);
  const [tempDesc, setTempDesc] = useState(activity.description);

  const handleSaveDescription = () => {
    onEdit?.({ ...activity, description: tempDesc });
    setIsEditingDesc(false);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'dining':
        return <img src="../../assets/india cate.jpg" alt="Dining" className="w-full h-full object-cover" />;
      case 'attraction':
        return <img src="../../assets/red fort.webp" alt="Attraction" className="w-full h-full object-cover" />;
      case 'transport':
        return <img src="../../assets/Qutub-Minar-750x564.jpg" alt="Transport" className="w-full h-full object-cover" />;
      case 'accommodation':
        return <img src="../../assets/LotusDelhi.jpg" alt="Accommodation" className="w-full h-full object-cover" />;
      default:
        return null;
    }
  };

  return (
    <div className="border rounded-md shadow-sm p-4 bg-white mb-3 relative">
      {/* Top-right icons */}
      <div className="absolute top-2 right-2 flex gap-2">
        <MapPin
          size={16}
          className="text-green-600 cursor-pointer hover:opacity-75"
          onClick={() => {
            if (activity.location) {
              window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.location)}`, '_blank');
            }
          }}
        />
        <Upload
          size={16}
          className="text-blue-600 cursor-pointer hover:opacity-75"
          onClick={() => onUpdate?.(activity)}
        />
        <Trash2
          size={16}
          className="text-red-600 cursor-pointer hover:opacity-75"
          onClick={() => onDelete?.(activity)}
        />
      </div>

      {/* Main layout */}
      <div className="flex gap-4 items-start">
        {/* Image */}
        <div className="w-[100px] h-[100px] flex-shrink-0 rounded-lg overflow-hidden border">
          {getIcon(activity.type)}
        </div>

        {/* Text content */}
        <div className="flex-1">
          {/* Rating */}
         

          {/* Title BELOW rating */}
          <div className="text-lg font-semibold text-gray-800 mt-1">
            {activity.title}
          </div>
 <div className="flex items-center text-sm text-yellow-600 gap-1">
            <span className="font-medium">{activity.rating}</span>
            <Star size={14} fill="currentColor" strokeWidth={0} />
            <span className="text-gray-400">({activity.reviews})</span>
          </div>
          {/* Description */}
          <div className="text-sm text-gray-600 mt-2 bg-gray-100 p-2 rounded flex items-start gap-2">
            {isEditingDesc ? (
              <div className="flex flex-col gap-1 w-full">
                <textarea
                  value={tempDesc}
                  onChange={(e) => setTempDesc(e.target.value)}
                  className="border px-2 py-1 rounded w-full text-sm"
                  rows={3}
                />
                <button
                  onClick={handleSaveDescription}
                  className="text-xs text-green-600 border border-green-600 px-2 py-0.5 rounded hover:bg-green-50 w-fit"
                >
                  Save
                </button>
              </div>
            ) : (
              <>
                <span className="flex-1">{activity.description}</span>
                <Pencil
                  size={14}
                  className="text-blue-600 cursor-pointer hover:opacity-75 mt-1"
                  onClick={() => setIsEditingDesc(true)}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
