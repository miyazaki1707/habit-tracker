import arrIcon from '../assets/arrow_icon.svg';
import mapIcon from './mapIcon';

interface HabitProps {
  habitTitle: string,
  habitIcon: string
}

const Habit = ({ habitTitle, habitIcon }: HabitProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className='flex items-center'>
        <img className='p-[13px]' src={mapIcon(habitIcon)} alt="" />
        <h2 className='font-medium'>{habitTitle}</h2>
      </div>
      <button>
        <img className='pr-[20px]' src={arrIcon} alt="" />
      </button>
    </div>
  )
}

export default Habit