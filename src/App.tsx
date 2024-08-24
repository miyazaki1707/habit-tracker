
import Header from './components/Header'
import './App.css'
import pfp from './assets/pfp.png';
import { useEffect, useState } from 'react'
import { User } from './models/user.model';
import Routine from './components/UI/Routine';
import HabbitList from './components/UI/HabitList';
import AddButton from './components/UI/AddButton';

function App() {
  const [user, setUser] = useState<User>({id: "1", username: "Sora Miyazaki", profilePic:pfp});
  
  function getUser(): User { // make it async and get data from telegram api
  
    const user: User = {
      id: "1",
      username: "Sora Miyazaki",
      profilePic: pfp

    }
    return user;
  }

  useEffect(() => {
    const user =  getUser(); // make it awake
    setUser(user);
  }, [])

  return (
    <div className='App'>
      <Header id={user.id} username={user.username} profilePic={user.profilePic} ></Header>
      <Routine></Routine>
      <HabbitList></HabbitList>
      <AddButton></AddButton>
    </div>
  )
}

export default App
