import Calendar from '../components/UI/Calendar';
import DayStreak from '../components/UI/DayStreak';
import HabitChart from '../components/UI/HabitChart';
import NotificationsBlock from '../components/UI/NotificationsBlock';
import { useNavigate } from 'react-router-dom';

const HabitPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Calendar></Calendar>
      <DayStreak streak={15} ></DayStreak>
      <h3 className='text-[15px] font-medium mt-[30px] ml-[20px]'>Stats</h3>
      <div className='mx-[20px] mt-[30px]'>
        <HabitChart skipped={5} completed={25} ></HabitChart>
      </div>
      <div className="my-[40px] mx-[10px]">
        <NotificationsBlock></NotificationsBlock>
      </div>

    </div>
  )
}

export default HabitPage