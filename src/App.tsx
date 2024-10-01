import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home'
import CreateHabitPage from './pages/CreateHabit'
import HabitPage from './pages/HabitPage'

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path='/'
          element={<HomePage />}
        />
        <Route path='/create'
          element={<CreateHabitPage />}
        />
        <Route path='/habit'
          element={<HabitPage />}
        />
      </Routes>
    </div>
  )
}

export default App
