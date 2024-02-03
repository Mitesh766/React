import { useState,memo } from "react"

let a=10;
// as a is a variable Demo will rerender only once.
function App12(){
    const[count,setCount]=useState(0)




    return <div>
        <button onClick={()=>{
            setCount(count+1)
        }} >Counter {count}</button>
        <Demo a={a}></Demo>
    </div>

}
const Demo=memo(function Demo({a}){
    console.log("Hello")
    return <div>
        {a}
    </div>
})
export default App12