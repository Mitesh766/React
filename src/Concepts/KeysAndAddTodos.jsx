// use of keys , and adding of elements in existing todo list.
// Keys let react figure out if a
// TODO has been update,
// which has been delete,
// which has been added
import { useState } from "react"
let id=4
function App2(){
    const[todos,setTodo]=useState([{
        id:1,
        title:"Complete Revision of react",
        description:"Week 6.1 and 6.2"
    },{
        id:2,
        title:"See the lectures ",
        description:"week 6.3"
    },{
        id:3,
        title:"Do CP question",
        description:"Daily 3"
    }])
    
    return(
        <>
            <button onClick={()=>{
                setTodo([...todos,{
                    id:id++,
                    title:"Watch Dr VB's Lecture",
                    description:"For 1 hour"
                }])
            }}>Add Todo</button>
            {todos.map(todo=>{
return <Todo title={todo.title} description={todo.description} key={todo.id}/>
            })}
        </>
    )
}

function Todo({title,description}){
return <div>

<h1>{title}</h1>
<br></br>
<h3>{description}</h3>
</div>
}
export default App2
