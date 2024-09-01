import { Nullable } from 'primereact/ts-helpers';
import Calendar from '../components/UI/Calendar';
import DayStreak from '../components/UI/DayStreak';

const HabitPage = () => {
    function setDate(value: Nullable<Date>): void {
        console.log(value);
    }

  return (
    <div>
        <Calendar></Calendar>
        <DayStreak streak={15} ></DayStreak>
    </div>
  )
}

export default HabitPage