import { useEffect, useState } from "react";
//rerender todos one by one after every second
 
function App4() {
    const [todos, setTodos] = useState([])
    useEffect(()=>{
        setInterval(()=>{
            fetch("https://sum-server.100xdevs.com/todos")
            .then(async function (response) {
                const json = await response.json();
                setTodos(json.todos)
            })
        },1000)
        
    },[])
 
    return <div>
        {todos.map(todo=>{
             return <Todo key={todo.id} title={todo.title} description={todo.description}/>
        })}
    </div>
}

function Todo({title,description}){
return<div>
{title}
{description}
</div>    
}
export default App4