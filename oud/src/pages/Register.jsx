import './Register.css';

import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { app } from "../../firebase/firebase";

function Registrations() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [loginError,setLoginError] = useState('');

  const auth = getAuth(app);

  const HandleSignUp =async(e)=>{
      try{
          await createUserWithEmailAndPassword(auth,email,password);
          console.log("Signup Done!")
      }
      catch(error){
        console.log(error);
      }
  }
  return (
    <div>
      <form>
        <input
        type="text"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholders="Enter your email..."
        />
        <input
        type="text"
        value={password}
        onChange={(e)=>setEmail(e.target.value)}
        placeholders="Enter your password..."
        />
        <button type="submit">Login</button>
      </form>
      <button>Sign up</button>
      <button>Continue with Google</button>
    </div>

  )
}