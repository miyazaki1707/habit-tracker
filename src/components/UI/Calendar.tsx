import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/en'; // Ensure dayjs uses the correct locale for dates
import classNames from 'classnames';

const CustomCalendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [completedDates, setCompletedDates] = useState<string[]>([]);

  useEffect(() => {
    // Example: Load completed dates from local storage or a backend (Firebase, etc.)
    const savedCompletedDates = JSON.parse(localStorage.getItem('completedDates') || '[]');
    setCompletedDates(savedCompletedDates);
  }, []);

  const daysInMonth = currentDate.daysInMonth();
  const startDayOfWeek = currentDate.startOf('month').day();
  
  const handleDayClick = (day: number) => {
    const dateStr = currentDate.date(day).format('YYYY-MM-DD');
    if (completedDates.includes(dateStr)) {
      setCompletedDates(completedDates.filter(date => date !== dateStr));
    } else {
      setCompletedDates([...completedDates, dateStr]);
    }
    // Example: Save completed dates to local storage or a backend
    localStorage.setItem('completedDates', JSON.stringify(completedDates));
  };

  const isCompleted = (day: number) => {
    const dateStr = currentDate.date(day).format('YYYY-MM-DD');
    return completedDates.includes(dateStr);
  };

  const renderDays = () => {
    const days = [];
    for (let i = 1; i <= daysInMonth + startDayOfWeek; i++) {
      const day = i - startDayOfWeek;
      if (i > startDayOfWeek) {
        days.push(
          <div
            key={i}
            className={classNames(
              'flex justify-center items-center cursor-pointer w-10 h-10 m-auto rounded-full',
              isCompleted(day) ? 'bg-green-500 text-white' : 'bg-white',
              'hover:bg-gray-300'
            )}
            onClick={() => handleDayClick(day)}
          >
            {day}
          </div>
        );
      } else {
        days.push(<div key={i}></div>);
      }
    }
    return days;
  };

  const handlePreviousMonth = () => {
    setCurrentDate(currentDate.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, 'month'));
  };

  return (
    <div className="w-[100%] mx-auto px-[25px]">
      <div className="flex justify-between items-center mb-4">
        <button className='text-[25px]' onClick={handlePreviousMonth}>&lt;</button>
        <h2 className="text-lg font-semibold">{currentDate.format('MMMM YYYY')}</h2>
        <button className='text-[25px]' onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium text-black">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="uppercase">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm mt-2">
        {renderDays()}
      </div>
    </div>
  );
};

export default CustomCalendar;