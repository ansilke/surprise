import React, { useContext } from 'react'
import "./style.css"
import Usercontext from '../Context/Usercontext'
function Comp2() {
    const {user,setuser}=useContext(Usercontext);
    if(user=="surprise"){
        return(
            <div className="name">
            "click the button see the surprise"
            </div>
        )
    }
    else{
        return(
            <>
            <img src="https://lh4.googleusercontent.com/proxy/W8PrY4WD9ZVweMDwN0mTjGGthoRLEe86vPxEsL7fy2_kgxVixfAsmVniixl1Aw05BKrOgb4ycNbQ5LRV_7prQcp0Cil4xbZAMR9dRDnkbC12iLUxcdSjZQXjVOhV9F1qexDP4UHIB-d5_KJh_Tf5Y1IgnRpR" alt="" />
            </>
        )
    }
}

export default Comp2
