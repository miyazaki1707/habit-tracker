import React from 'react';

interface IOSSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const IOSSwitch: React.FC<IOSSwitchProps> = ({ checked, onChange }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only peer"
      />
      <div
        className={`w-[40px] h-[24px] bg-gray-200 rounded-full peer-checked:bg-[#1E1E1E] transition-colors duration-300 ease-in-out`}
      >
        <div
          className={`absolute top-1 left-0.5 w-[18px] h-[18px] bg-white border border-gray-300 rounded-full transition-all duration-300 ease-in-out transform ${
            checked ? 'translate-x-full bg-white' : 'translate-x-0'
          }`}
        ></div>
      </div>
    </label>
  );
};

export default IOSSwitch;