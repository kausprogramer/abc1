// import React, { useState } from "react";
// import Navi1 from "./navi1";
// import InputControl from "./inputContol";
// import { Link, useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth, db } from '../firebase';
// import{
//     collection,
//     getDocs,
//     getDoc,
//     addDoc,
//     updateDoc,
//     deleteDoc,
//     doc
// } from "firebase/firestore"

// function Signup(){
//     const [values,setValues]= useState({
//         name:"",
//         email:"",
//         pass:""
//     }); 
//     const navigate = useNavigate();
//     const [errMsg,setErrMsg]= useState("");
//     const [submitDisabled,setSubmitDisabled]= useState(false);
//     const userCollectionRef = collection(db, "adminUser")
//     const addUser= (newUser)=>{
//         return addDoc(userCollectionRef, newUser);
//     }
//     const handleSubmit = async ()=>{
//         if(!values.name || !values.email || !values.pass)
//         {
//             setErrMsg("Please Fill All Fields");
//             return;
//         }
//         setSubmitDisabled(true);
//         setErrMsg("");
//         createUserWithEmailAndPassword(auth, values.email,values.pass).then(async (res)=>{console.log(res); 
//             const email= values.email;
//             const name = values.name;
//             const isAuth= 0; 
//             const newUser={
//                 email,
//                 name,
//                 isAuth
//             };
//             updateProfile(res.user, {displayMail: email});
//             await addUser({newUser}); 
//             setSubmitDisabled(false); 
//             navigate('/login');}
//         )
//         .catch((err)=>{console.log("Error-",err)
//         setSubmitDisabled(false);
//     });
//     };
//     return(
//         <div>
//         <Navi1/>
//         <InputControl type='text'  label='Full Name: ' placeholder='Enter Your Name'
//         onChange={(event)=>setValues((prev)=> ({...prev, name: event.target.value}))}
//         />
//         <InputControl type='text'  label='Email: ' placeholder='Enter Your Email ID'
//         onChange={(event)=>setValues((prev)=> ({...prev, email: event.target.value}))}/>
//         <InputControl type='password' label='Password: ' placeholder='*********'
//         onChange={(event)=>setValues((prev)=> ({...prev, pass: event.target.value}))}/>
//         <b>{errMsg}</b>
//         <div>
//             <button  onClick={handleSubmit} disabled={submitDisabled}>Signup</button>
//             <p>
//                 Allredy have an existing account? <Link style={{color:'black'}} to={'/login'}>login</Link>
//             </p>
//         </div>
//         </div>
//     );
// }

// export default Signup;



import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
    
import Navi1 from "./navi1";
import InputControl from "./inputContol";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from '../firebase';
import { Navigate } from 'react-router-dom';
import{
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
} from "firebase/firestore"



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

 function Signup() {
    const userCollectionRef = collection(db, "adminUser")
    const navigate = useNavigate();
    const addUser= (newUser)=>{
                return addDoc(userCollectionRef, newUser);
            }

  const handleSubmit = async (event) => {
   
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if(!data.get('name') || !data.get('email') || !data.get('password'))
        {
            alert("Please Fill All Fields");
            return;
        }
        // setSubmitDisabled(true);
       
        createUserWithEmailAndPassword(auth, data.get('email'),data.get('password')).then(async (res)=>{console.log(res); 
            const email= data.get('email');
            const name = data.get('name');
            const isAuth= 0; 
            const newUser={
                email,
                name,
                isAuth
            };
            updateProfile(res.user, {displayMail: email});
            await addUser({newUser}); 
            // setSubmitDisabled(false); 
            navigate('/login');}
        ).catch(error => {
            alert(error);
            
        // setSubmitDisabled(false);
    });
    console.log({
        name:data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div>
        <Navi1/>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#3F51B5' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="ame"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{backgroundColor:'#3F51B5'}}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={'/login'} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
    </div>
  );
}

export default Signup;