import styles from "./formTodo.module.css"

export default function TodoItem({todo,setTodos,todos, setStatus}){

    function handleDlt(todo){
        
        setTodos(todos.filter((item)=>item.item!==todo.item))
       
    }

    function handleMark(todo){
       
       let newTodos= todos.map((tdo)=>tdo.item===todo.item?{...tdo,done:!tdo.done}:tdo);
       setTodos(newTodos);

    }
   
  let className=!todo.done?styles.completed:"";

 
    
    return(
        <div style={{display:"flex", justifyContent:"space-between",alignItems:"center",width:"400px", background:"#ecf3ef",padding:"8px", margin:"0 auto", marginTop:"10px", borderRadius:"5px",}}>
            
            <h3 className={className} style={{ fontSize:"16px",width:"90%",background:"white", boxShadow:"0px 0px 10px white", padding:"8px", borderRadius:"20px",height:"20px"}} onClick={()=>handleMark(todo)}>{todo.item}</h3>
            <span style={{width:"10%",}}><button style={{background:" rgb(173, 137, 142)",border:"none",cursor:"pointer"}} onClick={()=>handleDlt(todo)}>X</button></span>

            
        </div>
    )
}