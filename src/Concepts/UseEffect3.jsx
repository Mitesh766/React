// on button click show the next Todo
import { useEffect, useState } from "react"

function App6() {
  const [id, setId] = useState(1)
  return <div>
    <button onClick={() => {
      setId(id + 1)
    }}>Next</button>

    <Todo id={id}></Todo>
  </div>
}
function Todo({ id }) {
  const [todo, setTodo] = useState({})
  useEffect(() => {
  fetch("https://sum-server.100xdevs.com/todo?id=" + id)
  .then(async function (response) {
    const json = await response.json()
    setTodo(json.todo)
  })
   
    },[id])
  return<div>
    {todo.title}
    {todo.description}
  </div>
}
export default App6