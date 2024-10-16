import styles from "./formTodo.module.css"

export default function Footer({todos}){
    let completed= todos.filter((tdos)=>!tdos.done).length;
    let total_todo=(todos).length;
    let not_completed=total_todo - completed
    return(
        <div className={styles.footer}>
            <span className={styles.not_completed}>not Completed: {not_completed}</span>
        </div>
    )
}