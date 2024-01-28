import { useMemo, useState } from "react"
//withou useMemo
function App8(){
    const [count,setCount]=useState(0)
    const [sum,setSum]=useState(0)
let ans=0;

    function Answer(){
        let num=parseInt(document.getElementById("but").value)
        for(let i=1;i<=num;i++){
        ans+=i;
        }
        setSum(ans);
    }
    
return<div>
    <input type="text" id="but" placeholder="Enter a number" onChange={Answer}/>
    <br></br><br></br>
    <div>Sum is {sum}</div>
    <br></br><br></br>

    <button onClick={()=>{
        setCount(count+1)
    }}>Counter {count}</button>
</div>
}
export default App8