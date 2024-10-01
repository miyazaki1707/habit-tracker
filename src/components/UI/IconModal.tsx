import React, { useState, useRef, useEffect  } from "react";
import MrnRoutine from '../../assets/mrn_icon.svg'; 
import EvnRoutine from '../../assets/evn_routine.svg'; 
import DolIcon from '../../assets/dollar_icon.png';

type Icon = {
  name: string;
  icon: string;
};

type IconSelectorProps = {
  onSelect: (iconName: string) => void;
};

const icons: Icon[] = [
  { name: "Smile", icon: MrnRoutine},
  { name: "Heart", icon: EvnRoutine },
  { name: "dasd", icon: EvnRoutine },
  { name: "dasd", icon: MrnRoutine },
];

const IconSelector: React.FC<IconSelectorProps> = ({ onSelect }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);

  const handleIconClick = (icon: string) => {
    setSelectedIcon(icon);
    onSelect(icon);
    setShowModal(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
      window.history.pushState(null, "", window.location.href); 
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <div>
      <button
        type="button"
        className="w-[45px] h-[45px]"
        onClick={() => setShowModal(true)}
      >
        {selectedIcon ? (
            <img className="w-full h-full" src={selectedIcon} alt="" />
        ) : (
          <img className="w-full h-full" src={DolIcon} alt="" />
        )}
      </button>

      {showModal && (
        <div className="z-10 fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div ref={modalRef} className="bg-white rounded-lg p-[20px]">
            <h2 className="font-medium text-[17px] mb-[10px] text-center">SELECT A CATEGORY</h2>
            <div className="grid grid-cols-5">
              {icons.map((icon) => (  
                <img
                  src={icon.icon}
                  key={icon.name}
                  className="cursor-pointer w-20 px-[10px] borderrounded-lg text-center"
                  onClick={() => handleIconClick(icon.icon)}
                >
                </img>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IconSelector;