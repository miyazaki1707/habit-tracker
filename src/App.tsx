import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home'
import CreateHabitPage from './pages/CreateHabit'
import CreateRoutinePage from './pages/CreateRoutine'
import HabitPage from './pages/HabitPage'
import { PrimeReactProvider } from 'primereact/api';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';


function App() {
  return (
    <PrimeReactProvider>
      <div className=''>
        <Routes>
          <Route path='/'
                element={<HomePage />}
                  />
          <Route path='/create'
                element={<CreateHabitPage />}
                  />     
          <Route path='/createroutine'
                element={<CreateRoutinePage />}
                />    
          <Route path='/habit'
                element={<HabitPage />}
                />                               
        </Routes>
      </div>
      </PrimeReactProvider>
  )
}

export default App
