import { useState } from "react"
import NotificationsBlock from '../components/UI/NotificationsBlock'
import MrnIcon from '../assets/mrn_icon.svg';
import { useNavigate } from "react-router-dom";

const CreateRoutinePage = () => {
    const navigate = useNavigate();

    const [habitName, setHabitName] = useState('')
  
    return (
      <div className="relative min-h-screen">
      <h1 className="text-center font-medium text-[20px]">{
          habitName ? habitName: "New routine"
        }</h1>
      <div className="flex ml-[20px]">
        <button  className="mt-[24px] w-[49px] h-[49px] rounded-[5px]"><img className="w-full" src={MrnIcon} alt="" /></button>
        <input className="outline-none ml-[14px] text-[16px]" type="text" placeholder="New routine"  value={habitName} onChange={e => setHabitName(e.target.value)}/>
      </div>
      <div className="mt-[40px] ml-[20px]">
        <NotificationsBlock></NotificationsBlock>
        </div>
        <button onClick={e => navigate("/")} className="w-[100%] h-[50px] bg-[#000] text-[#fff] absolute bottom-0 left-0 justify-center font-medium text-[18px] text-center">Create routine</button>
      </div>
    )
}

export default CreateRoutinePage