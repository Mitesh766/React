// it is used to get access to DOM elements,change the DOM elements 
import { useEffect, useRef, useState } from "react";
function App15(){
    const[income,setIncome]=useState(20000)
  const divRef=useRef()

    useEffect(()=>{
        setInterval(()=>{
            divRef.current.innerHTML=10
        },5000)
        
    },[])

return<div>
    You have to pay <div ref={divRef}>{income}</div>
</div>

}
export default App15