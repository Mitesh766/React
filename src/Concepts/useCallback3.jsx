import { useState,memo, useCallback } from "react"
// Demo won't rerender again and again as it is a callback function,therefore
//  will only rerenders based on the dependency array
function App13(){
    const[count,setCount]=useState(0)

const a =useCallback(function(){
    return 7+6;
},[])     


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
export default App13