//context Api->It makes it very easy to pass state variables between components without drilling them down.It lets you teleport state components
//lets you keep all state logic outside of your core react component.
//You have to define a context in separate file
//wrap anyone that wants to use the teleported value inside a provider


import { Component, useContext, useState } from "react"
import { CountContext } from "../../Components/COntext"
// here count is set as context api ,showing that we dont have to pass count again and again
// here setCount is not set as context Api ,therefore we have to pass it as a prop again and again
export default function App19(){
    const [count,setCount]=useState(0)
    return <div>
        <CountContext.Provider value={count}>
        <Count setCount={setCount}/>

        </CountContext.Provider>

  </div>
}

function Count({setCount}){
return <div>
<ComponentRerender />
<Buttons setCount={setCount}/>
</div>

}


function ComponentRerender(){
const count=useContext(CountContext)
return <div>
    {count}
</div>
}

function Buttons({setCount}){
    const count=useContext(CountContext)
return <div>
<button onClick={()=>{setCount(count+1)}}>Increase</button>


</div>

}