import Habit from "../Habit"
import dolIcon from '../../assets/dollar_icon.png';
import medIcon from '../../assets/meditate_icon.png';


const HabbitList = () => {
  return (
    <div className="bg-[#F9F9F9] rounded-[7px] mt-[24px]">
      <Habit habitTitle={"Save 10$ per day"} habitIcon={dolIcon} ></Habit>
      <div className="bg-[#696969] h-[0.08px] opacity-30"></div>
      <Habit habitTitle={"Meditate for 5 min"} habitIcon={medIcon} ></Habit>
    </div>
  )
}

export default HabbitList