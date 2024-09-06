import React, { useState } from 'react';
import { format, addMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns';

function Calendar({ onDateSelect }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(addMonths(currentDate, -1));

  const days = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate)
  });

  const handleDateClick = (day) => {
    setSelectedDate(day);
    onDateSelect(day);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth}>&lt;</button>
        <h2 className="text-lg font-semibold">{format(currentDate, 'MMMM yyyy')}</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-medium text-sm pb-1">{day}</div>
        ))}
        {days.map(day => (
          <button
            key={day.toString()}
            onClick={() => handleDateClick(day)}
            className={`
              p-2 text-center text-sm rounded-full
              ${!isSameMonth(day, currentDate) ? 'text-gray-300' : 'hover:bg-gray-100'}
              ${isSameDay(day, selectedDate) ? 'bg-black text-white' : ''}
            `}
          >
            {format(day, 'd')}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calendar;