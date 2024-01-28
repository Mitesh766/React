//memoize the value across re-renders, only
// recalculate it if inputVal changes
import { useMemo, useState } from "react"
function App9(){

    const [count,setCount]=useState(0)
    const [num,setnum]=useState(0)
    
let ans=useMemo(()=>{
    function Answer(){
        for(let i=1;i<=num;i++){
        ans+=i;
        }
        return ans;
    }
},[num])
   
return<div>

    <input type="text"  placeholder="Enter a number" onChange={(e)=>{
        setnum(e.target.value)
    }}/>
    <br></br><br></br>
    <div>Sum from 1 to {num} is {ans}</div>
    <br></br><br></br>

    <button onClick={()=>{
        setCount(count+1)
    }}>Counter {count}</button>

</div>

}
export default App9