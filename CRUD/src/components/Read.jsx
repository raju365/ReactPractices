const Read = (props) => {
  const todos=props.todos;
  const setTodos=props.setTodos;

  const renderTodos =todos.map((todo)=>{
  return <li style={{color:todo.isCompleted?"greem":"tomato"}} key={todo.id}>{todo.title}</li>
 })
  return (
    <div >
      <h1>Pending Todos</h1>
      <ol>{renderTodos}</ol>
    </div>
  )
}

export default Read