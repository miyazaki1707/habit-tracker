import Calendar from '../components/UI/Calendar';
import DayStreak from '../components/UI/DayStreak';
import HabitChart from '../components/UI/HabitChart';
import NotificationsBlock from '../components/UI/NotificationsBlock';
import { useLocation, useNavigate } from 'react-router-dom';

const HabitPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { habit } = location.state || {};
  console.log(habit);

  return (
    <div className='relative min-h-screen'>
      <Calendar dates={habit.records}></Calendar>
      <DayStreak streak={habit.streak} ></DayStreak>
      <h3 className='text-[15px] font-medium mt-[30px] ml-[20px]'>Stats</h3>
      <div className='text-center'>
        <HabitChart skipped={habit.records.length - habit.completed} completed={habit.completed}></HabitChart>
      </div>
      <div className="my-[40px] mx-[10px]">
        <NotificationsBlock notificationTime={habit.notificationsTime} notificationsDays={habit.notificationsDays}></NotificationsBlock>
      </div>

      <button onClick={e => navigate("/")} className="w-[100%] h-[50px] bg-[#000] text-[#fff] absolute bottom-0 left-0 justify-center font-medium text-[18px] text-center">Save changes</button>
    </div>
  )
}

export default HabitPage