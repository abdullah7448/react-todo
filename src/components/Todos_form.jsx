import { useState } from "react";
import styles from "./formTodo.module.css"

export default function Form_todo({todos,setTodos,status}){

    const[todo,setTodo]=useState({item:"", done:"false"});
    
    function checkTodo(todo){
        if(todo.item!==""){
            setTodos([...todos,todo]);
            
        }else{
            alert("this todo is empty  or added rarlier")
        }
    }
    
    function handleSubmit(e){

        e.preventDefault();
        checkTodo(todo)
        setTodo({item:"", done:"false"});
    }

    let completed= todos.filter((tdos)=>!tdos.done).length;
    let total_todo=todos.length
   
    return(

        <div className={styles.form_parent} >
           
            <h1 className={styles.todo_title}>Todo Using React</h1>
            <div className={styles.count_parent}>
            <p className={styles.success}>completed:{completed }</p>
            <form action=""  onSubmit={(e)=>handleSubmit(e)}>
                <input type="text" placeholder="Insert here" name="todo" onChange={(e)=>setTodo({item:e.target.value,done:"false"})} />
                <button type="submit" name="submit">Add</button>
            </form>
            <p>total Todo:{total_todo}</p>
            </div>
        </div>
    )
}