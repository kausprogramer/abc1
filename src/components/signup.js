import React, { useState } from "react";
import Navi1 from "./navi1";
import InputControl from "./inputContol";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from '../firebase';
import{
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
} from "firebase/firestore"

function Signup(){
    const [values,setValues]= useState({
        name:"",
        email:"",
        pass:""
    }); 
    const navigate = useNavigate();
    const [errMsg,setErrMsg]= useState("");
    const [submitDisabled,setSubmitDisabled]= useState(false);
    const userCollectionRef = collection(db, "adminUser")
    const addUser= (newUser)=>{
        return addDoc(userCollectionRef, newUser);
    }
    const handleSubmit = async ()=>{
        if(!values.name || !values.email || !values.pass)
        {
            setErrMsg("Please Fill All Fields");
            return;
        }
        setSubmitDisabled(true);
        setErrMsg("");
        createUserWithEmailAndPassword(auth, values.email,values.pass).then(async (res)=>{console.log(res); 
            const email= values.email;
            const name = values.name;
            const isAuth= 0; 
            const newUser={
                email,
                name,
                isAuth
            };
            updateProfile(res.user, {displayName: name});
            await addUser({newUser}); 
            setSubmitDisabled(false); 
            navigate('/login');}
        )
        .catch((err)=>{console.log("Error-",err)
        setSubmitDisabled(false);
    });
    };
    return(
        <div>
        <Navi1/>
        <InputControl type='text'  label='Full Name: ' placeholder='Enter Your Name'
        onChange={(event)=>setValues((prev)=> ({...prev, name: event.target.value}))}
        />
        <InputControl type='text'  label='Email: ' placeholder='Enter Your Email ID'
        onChange={(event)=>setValues((prev)=> ({...prev, email: event.target.value}))}/>
        <InputControl type='password' label='Password: ' placeholder='*********'
        onChange={(event)=>setValues((prev)=> ({...prev, pass: event.target.value}))}/>
        <b>{errMsg}</b>
        <div>
            <button  onClick={handleSubmit} disabled={submitDisabled}>Signup</button>
            <p>
                Allredy have an existing account? <Link style={{color:'black'}} to={'/login'}>login</Link>
            </p>
        </div>
        </div>
    );
}

export default Signup;