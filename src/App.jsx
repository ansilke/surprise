import { useState } from 'react'
import './App.css'
import Comp1 from './Components/Comp1'
import Comp2 from './Components/Comp2'
import Usercontext from './Context/Usercontext'

function App() {
  const [user, setuser] = useState("surprise")

  return (
    <>
     <div className="main">
      <Usercontext.Provider value={{user,setuser}}>
      <Comp1/>
      <Comp2/>
      </Usercontext.Provider>
     </div>
    </>
  )
}

export default App
