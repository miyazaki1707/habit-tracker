import React, { useState } from 'react';

interface TimePickerProps {
  step?: number;
  onTimeSelect?: (time: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ step = 10, onTimeSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const startMinutes = 5 * 60;
  const endMinutes = 24 * 60;

  const times: string[] = [];
  for (let i = startMinutes; i < endMinutes; i += step) {
    const hours = String(Math.floor(i / 60)).padStart(2, '0');
    const minutes = String(i % 60).padStart(2, '0');
    times.push(`${hours}:${minutes}`);
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setIsOpen(false);
    if (onTimeSelect) onTimeSelect(time);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className=" text-black bg-[#fff] rounded-md  focus:outline-none font-medium text-[15px]"
      >
        {selectedTime || 'Select Time'}
      </button>
      {isOpen && (
        <ul
          className="absolute w-[100px] left-0 right-0 z-10 max-h-48 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg"
        >
          {times.map((time) => (
            <li
              key={time}
              onClick={() => handleTimeSelect(time)}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${
                selectedTime === time ? 'bg-gray-100' : ''
              }`}
            >
              {time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TimePicker;