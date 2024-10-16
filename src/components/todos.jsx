import TodoItem from "./todoItem"

export default function Todos({todos,setTodos,setStatus}){
    
    return(
       <div style={{display:"flex",justifyContent:"center", alignItems:"center", flexWrap:"wrap",width:"80%",margin:"0 auto"}}>
             {todos.map((todo)=>(
            <TodoItem key={todo.item} todo={todo} setTodos={setTodos} todos={todos} setStatus={setStatus}/>
        ))}
       </div>
    )
}