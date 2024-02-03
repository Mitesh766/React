// it is used to get access to DOM elements,change the DOM elements 
import { useEffect, useState } from "react";
function App14(){
    const[income,setIncome]=useState(20000)


    useEffect(()=>{
        setInterval(()=>{
            document.getElementById("container").innerHTML=10
        },5000)
        
    },[])

return<div>
    You have to pay <div id="container">{income}</div>
</div>

}
export default App14