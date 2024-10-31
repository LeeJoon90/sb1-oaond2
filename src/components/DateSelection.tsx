import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Plus, Minus } from 'lucide-react';

type Props = {
  selectedDate?: Date;
  extraHours: number;
  onSelect: (date: Date, extraHours: number) => void;
};

export default function DateSelection({ selectedDate, extraHours, onSelect }: Props) {
  const [date, setDate] = useState<Date>(selectedDate || new Date());
  const [additional, setAdditional] = useState(extraHours);

  const handleExtraHours = (increment: boolean) => {
    const newHours = increment 
      ? Math.min(additional + 1, 4)  // Max 4 extra hours
      : Math.max(additional - 1, 0);
    setAdditional(newHours);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-800">Select Date & Time</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Date Selection */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
            <CalendarIcon className="w-5 h-5 text-purple-600" />
            <span>Event Date</span>
          </div>
          <input
            type="date"
            value={date.toISOString().split('T')[0]}
            onChange={(e) => setDate(new Date(e.target.value))}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
          />
        </div>

        {/* Extra Hours */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
            <Clock className="w-5 h-5 text-purple-600" />
            <span>Additional Hours</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleExtraHours(false)}
              disabled={additional === 0}
              className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-purple-600 text-purple-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-50 transition-colors"
            >
              <Minus className="w-5 h-5" />
            </button>
            
            <span className="text-2xl font-bold text-gray-800 w-8 text-center">
              {additional}
            </span>
            
            <button
              onClick={() => handleExtraHours(true)}
              disabled={additional === 4}
              className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-purple-600 text-purple-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-50 transition-colors"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-sm text-gray-600">
            Extra hours: ${additional * 150} (${150}/hour)
          </p>
        </div>
      </div>

      <button
        onClick={() => onSelect(date, additional)}
        className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
      >
        Continue with Selected Date
      </button>
    </div>
  );
}