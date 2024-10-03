import { useEffect, useState } from 'react'
import pfp from '../assets/pfp.png';
import AddButton from '../components/UI/AddButton'
import HabbitList from '../components/UI/HabitList'
import Header from '../components/Header'
import { User } from '../models/user.model';
import json from '../assets/json/habit.json';
import { HabitModel } from '../models/habit.model';

const HomePage = () => {
  const [user, setUser] = useState<User>({ id: "1", username: "Sora Miyazaki", profilePic: pfp });
  const [habits, setHabits] = useState<HabitModel[]>([]);

  function getUser(): User { // make it async and get data from telegram api

    const user: User = {
      id: "1",
      username: "Sora Miyazaki",
      profilePic: pfp

    }
    return user;
  }

  useEffect(() => {
    const user = getUser(); // make it awake
    setUser(user);

    const data = json.habits;
    const parsedHabbits: HabitModel[] = [];
    data.forEach(element => {
      const habit = element as unknown as HabitModel;
      parsedHabbits.push(habit);
    });

    setHabits(parsedHabbits);

  }, [])

  return (
    <>
      <Header id={user.id} username={user.username} profilePic={user.profilePic}></Header>
      <div className='px-[15px]'>
        <HabbitList habits={habits}  ></HabbitList>
      </div>
      <AddButton></AddButton>
    </>
  )
}

export default HomePage