import React, { useState } from 'react'
import Add from "../img/addAvatar.png"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { async } from '@firebase/util'

export const Register = () => {
  const [err,setErr] = useState(false);
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    // see screen shot-> if didnt initialise auth->400 bad request
    try{
      const res = await createUserWithEmailAndPassword(auth, email, password);
    }catch(err){
      setErr(true);
    }
    

  }

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>chatME</span>
            <span className='title'>Register here</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input style={{display:"none"}} type="file" name="" id="file" />
                <label htmlFor="file">
                    <img src={Add} alt="avatar" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
                {err && <span>Something went wrong..</span>}
            </form>
            <p>You do have an account? Login</p>
        </div>        
    </div>
  )
}
