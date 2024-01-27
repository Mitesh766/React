//To see the use of memo 
//React.memo==⇒memo lets you skip Rerendering a component when its props are unchanged

import { memo, useState } from "react"
function StopExtraRender(){
    const[title,settitle]=useState("Study")
    return <div>
        <button onClick={()=>{
            settitle(Math.random())
        }}>Change it </button>
    <br></br>
    <br></br>
    <Todo title={title}/>
    <br></br>
    <Todo title={"Work hard"}/>
    </div>
}
const Todo=memo(function Todo({title}){
    return<div>
    Title is {title}
    </div>
    })

export default StopExtraRender