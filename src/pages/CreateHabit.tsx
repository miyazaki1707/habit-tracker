import { useState } from "react"
import NotificationsBlock from '../components/UI/NotificationsBlock'
import { useNavigate } from "react-router-dom";
import IconModal from "../components/UI/IconModal";


const CreateHabitPage = () => {
  const navigate = useNavigate();

  const [habitName, setHabitName] = useState('')
  const [selectedIcon, setSelectedIcon] = useState<string>("");

  const handleIconSelect = (iconName: string) => {
    setSelectedIcon(iconName);
  };

  return (
    <div className="relative min-h-screen">
      <h1 className="text-center font-medium text-[20px] my-[22px]">{
        habitName ? habitName : "New Habit"
      }</h1>
      <div className="flex ml-[10px] items-start">
        <IconModal onSelect={handleIconSelect}></IconModal>
        <input className="outline-none ml-[14px] text-[16px]" type="text" placeholder="New habit" value={habitName} onChange={e => setHabitName(e.target.value)} />
      </div>
      <div className="mt-[40px] mx-[10px]">
        <NotificationsBlock></NotificationsBlock>
        <div className="mt-[20px]">
          <h3 className="text-[15px] font-medium">Routines</h3>
        </div>
      </div>
      <button onClick={e => navigate("/")} className="w-[100%] h-[50px] bg-[#000] text-[#fff] absolute bottom-0 left-0 justify-center font-medium text-[18px] text-center">Create habit</button>
    </div>
  )
}

export default CreateHabitPage
