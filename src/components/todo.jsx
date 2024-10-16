import { useState } from "react"
import TodoItem from "./todoItem";
import Form_todo from "./Todos_form";
import Todos from "./todos";
import Footer from "./foooter";
export default function Todo(){
    const[todos,setTodos]=useState([]);
    const[status,setStatus]=useState(0)

   
    return(
        <div>
            <Form_todo todos={todos} setTodos={setTodos} status={status}/>

            <Todos todos={todos} setTodos={setTodos} setStatus={setStatus}/>
            <Footer todos={todos} />
        </div>
    )
}