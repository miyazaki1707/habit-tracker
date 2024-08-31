import { useState } from 'react';
import okIcon from '../../assets/ok_icon.svg';

interface RoutineListItemProps {
    routineTitle: string,
    routineIcon: string
}

const RoutineListItem = ({routineTitle, routineIcon}: RoutineListItemProps) => {
    const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex items-center justify-between mt-[12px]">
        <div className='flex items-center'>
            <img className='pr-[15px]' src={routineIcon} alt="" />
            <h2 className='font-medium text-[13px]'>{routineTitle}</h2>
        </div>
        <button onClick={e => setIsActive(!isActive)} className={'px-[5px] py-[8px] rounded-[50px]' + (isActive ? " bg-[#4AC75E]": " bg-[#D9D9D9] w-[29px] h-[29px]")}>
            <img className={(isActive ? "block": "hidden")} src={okIcon} alt="" />
        </button>
        
    </div>
  )
}

export default RoutineListItem