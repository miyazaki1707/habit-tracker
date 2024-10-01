import { useEffect, useState } from 'react'
import pfp from '../assets/pfp.png';
import AddButton from '../components/UI/AddButton'
import HabbitList from '../components/UI/HabitList'
import Header from '../components/Header'
import { User } from '../models/user.model';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [user, setUser] = useState<User>({ id: "1", username: "Sora Miyazaki", profilePic: pfp });

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
  }, [])

  return (
    <>
      <Header id={user.id} username={user.username} profilePic={user.profilePic}></Header>
      <div className='px-[15px]'>
        <HabbitList></HabbitList>
      </div>
      <AddButton></AddButton>
    </>
  )
}

export default HomePage