import { useState } from "react"
import NotificationsBlock from '../components/UI/NotificationsBlock'
import RoutineListItem from "../components/UI/RoutineListItem"
import MrnIcon from '../assets/mrn_icon.svg';
import evnRoutine from '../assets/evn_routine.svg';
import { useNavigate } from "react-router-dom";


const CreateHabitPage = () => {
  const navigate = useNavigate();

  const [habitName, setHabitName] = useState('')

  return (
    <div className="relative min-h-screen">
    <h1 className="text-center font-medium text-[20px]">{
        habitName ? habitName: "New Habit"
      }</h1>
    <div className="flex ml-[20px]">
      <button  className="mt-[24px] w-[49px] h-[49px] bg-[#4B9A49] rounded-[5px] text-[#fff] text-[24px]">$</button>
      <input className="outline-none ml-[14px] text-[16px]" type="text" placeholder="New habit"  value={habitName} onChange={e => setHabitName(e.target.value)}/>
    </div>
    <div className="mt-[40px] ml-[20px]">
      <NotificationsBlock></NotificationsBlock>
      <div className="mt-[20px]">
        <h3 className="text-[15px] font-medium">Routines</h3>
        <div className="mt-[19px]">
          <RoutineListItem routineTitle={"Morning routine"} routineIcon={MrnIcon}></RoutineListItem>
          <RoutineListItem routineTitle={"Evening routine"} routineIcon={evnRoutine}></RoutineListItem>
        </div>
      </div>
      </div>
      <button onClick={e => navigate("/")} className="w-[100%] h-[50px] bg-[#000] text-[#fff] absolute bottom-0 left-0 justify-center font-medium text-[18px] text-center">Create habit</button>
    </div>
  )
}

export default CreateHabitPage
