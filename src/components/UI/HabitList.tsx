import Habit from "../Habit"
import dolIcon from '../../assets/dollar_icon.png';
import medIcon from '../../assets/meditate_icon.png';
import { Link } from "react-router-dom";
import { HabitModel } from "../../models/habit.model";
import React from "react";

interface HabbitListProps {
  habits: HabitModel[]
}

const HabbitList = (data: HabbitListProps) => {
  return (
    <div className="bg-[#F9F9F9] rounded-[7px] mt-[24px]">
      {data.habits.map((habit, index) => (
        <React.Fragment key={index}>
          <Link to={`/habit/${habit.id}`} state={{ habit }}>
            <Habit habitTitle={habit.title} habitIcon={habit.icon}></Habit>
          </Link>
          {index < data.habits.length - 1 && (
            <div className="bg-[#696969] h-[0.08px] opacity-30"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default HabbitList