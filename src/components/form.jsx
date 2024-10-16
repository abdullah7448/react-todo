import { useState } from "react";
import styles from "./form.module.css"

export default function Form() {

const [inp, setInp]=useState({email:"", password:""})
const [mailErr, setMailErr]=useState("")
const [passErr, setpassErr]=useState("")

 const mailCheck=(inp)=>{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inp.email);
  return(emailRegex);
}

const passCheck=(inp) =>{
   const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=])/.test(inp.password); 
  
  return(passwordRegex)
}
 passCheck(inp)

function handleSubmit(e){
  e.preventDefault();
  if(!mailCheck(inp)){
    setMailErr("email validation faild");
  }else{
    setMailErr("");
  }

  if(!passCheck(inp)){
    setpassErr("password validation faild");
  }else{
    setpassErr("");
  }

  if(mailCheck(inp) && passCheck(inp)){
   console.log('submitted')
  }else{
    console.log('submition faild')
  }

} 
  
    return (

      <div className={styles.parent_form}>
          <h1>Login Form</h1>
          {/* <h4>{err}</h4> */}
            <form className={styles.myform}  onSubmit={(e)=>handleSubmit(e)} method="post" target="/index.php" >
              <label className={styles.mylabel} htmlFor="email">Email:</label>
              <input className={styles.myinput} type="email" id="email" name="email" required onChange={(e)=>setInp({...inp,email:e.target.value})} /><br/>
              <span style={{color:'red'}}>{mailErr}</span> <br /><br/>

              <label className={styles.mylabel} htmlFor="password">Password:</label>
              <input className={styles.myinput} type="password" id="password" name="password" required onChange={(e)=>setInp({...inp,password:e.target.value})}/><br/>
              <span style={{color:'red'}}>{passErr}</span> <br /><br/>

              <input type="submit" value="Login"/>
            </form>
      </div>
    
    );
  }