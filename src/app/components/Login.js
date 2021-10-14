import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth } from '../firebase';
import "./Login.css";
function Login() {
 const [email,setEmail]= useState("");
 const [password,setPassword]= useState("");
 const [name,setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const  dispatch = useDispatch();
    const register =()=>{
        console.log("register");
        if(!name){
           return alert("Please enter a full name!"); 
        }

        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilePic,
            })
            .then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoUrl:profilePic,
                }))

            })
        }).catch((error)=>alert(error));
    }

    const loginToApp =(e)=>{
       e.preventDefault();
      console.log("LoginToApp")
      auth.signInWithEmailAndPassword(email,password).then(
          (userAuth)=>{
               dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:userAuth.user.displayName,
                    profileUrl:userAuth.user.photoUrl,
                }))
          }
      ).catch((error)=>alert(error));
    }



    return (
        <div className="login">
          <img src="https://carers-network.org.uk/wp-content/uploads/2020/05/Linkedin-Logo-2003%E2%80%932011-1500x844.png" alt="" />
        <form >
            <input placeholder="Full name (required if registering)" 
                   type="text" 
                   value={name} onChange={(e)=>setName(e.target.value)}/>
   <input placeholder="Profile pic URL (optional)" type="text" value={profilePic} onChange={(e)=>setProfilePic(e.target.value)} />
      <input placeholder="Email" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
    <input placeholder="Password" value={password} type="password" onChange={(e)=>setPassword(e.target.value)}  />
    <button type="submit" onClick={loginToApp}>Sign In</button>
   </form>

   <p>Not a membre ?{" "}
   <span className="login__register" onClick={register}>Register Now</span>
   </p>
        </div>
    )
}

export default Login
