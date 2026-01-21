
// import { useState } from 'react'
import './App.css'
// import FindByRole from './components/Queries/FindByRole'
// import IncrementCount from './components/userInteractions/IncrementCount'
// import QueryByRole from './components/Queries/QueryByRole'
// import GetAllByRole from './components/Queries/GetAllByRole'
// import GetAllByTitle from './components/Queries/GetAllByTitle'
import TypeClear from './components/userInteractions/TypeClear'
import Select from './components/userInteractions/Select'



const App = () => {

  // const buttons = ["Bouton 1","Bouton 2","Bouton 3"]
  // const [btns, setbtns] = useState(buttons)

  const options = ["Chien","Chat","Tigre"]

  return (
    <div className='App'>
      {/* <GetAllByRole btns={btns}/> */}
      {/* <GetAllByTitle */}
      {/* <QueryByRole /> */}
      {/* <FindByRole /> */}
      {/* <IncrementCount /> */}
      <TypeClear />
      <Select options={options}/>
    </div>

  )

}

export default App
