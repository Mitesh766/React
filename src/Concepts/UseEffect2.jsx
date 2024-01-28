// a component that takes a todo id as an input
// And fetches the data for that todo from the given endpoint
// And then renders it 
import { useEffect, useState } from "react"

function App5() {
    return <div>
        <Todo id={1} />
    </div>
}
function Todo({ id }) {
    const [todo, setTodos] = useState({})
    useEffect(() => {
        fetch("https://sum-server.100xdevs.com/todo?id=" + id)
            .then(async function (response) {
                const json = await response.json()
                setTodos(json.todo)
            })
    })
    return <div>
        {todo.title}
        {todo.description}
    </div>
}
export default App5