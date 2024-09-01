import streakIcon from '../../assets/fire.png';

interface DayStreakProps {
    streak: number
}

const DayStreak = ({streak}: DayStreakProps) => {
  return (
    <div className='flex justify-center items-center mt-[30px] bg-black text-[#fff] font-medium text-[20px] rounded-[20px] mx-[20px]'>
        <img className='py-[10px] pr-[20px]' src={streakIcon} alt="" />
        <p>Day streak: {streak}</p>
    </div>
  )
}

export default DayStreak