
import { useState } from 'react'
import './App.css'
import GetAllByRole from './components/Queries/GetAllByRole'



const App = () => {

  const buttons = ["Bouton 1","Bouton 2","Bouton 3"]
  const [btns, setbtns] = useState(buttons)

  return (
    <div className='App'>
      <GetAllByRole btns={btns}/>
    </div>

  )

}

export default App
