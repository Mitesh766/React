import { useEffect, useState } from "react"

function App7() {
    const [id, setId] = useState(1)
    return <div>

        <button onClick={() => {
            setId(1)
        }}>1</button>

        <button onClick={() => {
            setId(2)
        }} >2</button>

        <button onClick={() => {
            setId(3)
        }}>3</button>

        <button onClick={() => {
            setId(4)
        }}>4</button>

        <Todo id={id} />

    </div>
}


function Todo({ id }) {

    const [todo, setTodo] = useState({})

  

    useEffect(() => {
        const ans =   async ()=>{
            const response = await fetch("https://sum-server.100xdevs.com/todo?id=" + id)
            const json = await response.json()
            setTodo(json.todo)
        }
        ans()
    }, [id])
    return <div>
        {todo.title}
        {todo.description}

    </div>
}
export default App7