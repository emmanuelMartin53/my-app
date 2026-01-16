
// import { useState } from 'react'
import './App.css'
import FindByRole from './components/Queries/FindByRole'
// import QueryByRole from './components/Queries/QueryByRole'
// import GetAllByRole from './components/Queries/GetAllByRole'
// import GetAllByTitle from './components/Queries/GetAllByTitle'



const App = () => {

  // const buttons = ["Bouton 1","Bouton 2","Bouton 3"]
  // const [btns, setbtns] = useState(buttons)

  return (
    <div className='App'>
      {/* <GetAllByRole btns={btns}/> */}
      {/* <GetAllByTitle */}
      {/* <QueryByRole /> */}
      <FindByRole />
    </div>

  )

}

export default App
