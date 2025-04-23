import React, { useContext } from 'react'
import "./style.css"
import Usercontext from '../Context/Usercontext';

function Comp1() {
    const {user,setuser}=useContext(Usercontext);
    const handleclick=()=>{
        setuser("oomb")
    }
   
  return (
    <div className='sub'>
      <button onClick={handleclick}>see the surprise</button>
    </div>
  )
}

export default Comp1
