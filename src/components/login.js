
// // import { Card } from 'react-bootstrap';

// function Login() {
//   const [values, setValues] = useState({
//     email: '',
//     pass: ''
//   });
//   const [isAutha, setIsAutha] = useState(0);
//   const navigate = useNavigate();
//   const [errMsg, setErrMsg] = useState('');
//   const [submitDisabled, setSubmitDisabled] = useState(false);
//   const userCollectionRef = collection(db, 'adminUser');
//   const [items, setItems] = useState([]);

//   const addUser = (newUser) => {
//     return addDoc(userCollectionRef, newUser);
//   };
//   const fetcheditems=[];
//   useEffect(() => {
//     const fetchData = async () => {
//       if (!values.email) return;

//       try {
//         const querySnapshot = await getDocs(
//           collection(db, 'adminUser')
//         );

//         querySnapshot.forEach((doc) => {
//             fetcheditems.push(doc.data());
//         });
//         setItems(fetcheditems);
       
        
//       } catch (error) {
//         console.error('Error fetching data: ', error);
//       }
//     };

//     fetchData();
//   }, [values.email]);
//   for (const a of fetcheditems) {
//     if (a.email === values.email) {
//       console.log(a.newUser.isAuth);
//     }
//   } 
//   const handleSubmit = async () => {
//     console.log(values);
//     if (!values.email || !values.pass) {
//       setErrMsg('Please Fill All Fields');
//       return;
//     }

//     setSubmitDisabled(true);
//     setErrMsg('');

//     try {
//       const res = await signInWithEmailAndPassword(auth, values.email, values.pass);
//       console.log(res);
//       const { email, name, user } = values;
//       await updateProfile(user, { displayName: name });
//       // await addUser({ newUser });
//       setSubmitDisabled(false);
//       if (isAutha) {
//         navigate('/');
//       } else {
//         navigate('/user', {email: values.email});
//       }
//     } catch (err) {
//       setErrMsg(err);
//       setSubmitDisabled(false);
//     }
//   };

//   return (
//     <div  style={{alignContent:'center', alignItems:'center'}}>
//       <Navi1 />
//       <div style={{justifyContent:'space-around'}}>
//       <Card
//                 style={{
//                     marginLeft:'38%',
//                     marginTop:'13%',
//                     padding:40 ,
//                     alignSelf:'center',
//                     width:'20%',
//                     height:'40%',
//                     backgroundColor: "#1976D3",
//                     borderRadius:20,
//                     color:'white',
//                     boxShadow:'1px 2px 9px #0c2c4d',
//                 }}
//             >
//         <InputControl
//             type="text"
//             label="Email: "
//             placeholder="Enter Your Email ID"
//             onChange={(event) =>
//             setValues((prev) => ({ ...prev, email: event.target.value }))
//             }
//         />
//         <InputControl
//             type="password"
//             label="Password: "
//             placeholder="*********"
//             onChange={(event) =>
//             setValues((prev) => ({ ...prev, pass: event.target.value }))
//             }
//         />
//         <div>
//             <b>{errMsg}</b>
//             <br />
//             <br/>
//             <button style={{
//   cursor: 'pointer',
//   outline: 'none',
//   border: 'none',backgroundColor:'white', borderColor:'black', borderRadius:20, color:'black', paddingLeft:10,paddingRight:10, paddingTop:2, paddingBottom:2, fontSize:20}} onClick={handleSubmit} disabled={submitDisabled}>
//             Login
//             </button>
//             <p>
//             Don't have an existing account?{' '}
//             <Link style={{ color: 'black' }} to={'/signup'}>
//                 signup
//             </Link>
//             </p>
//         </div>
//         </Card>
//         </div>
//       </div>
    
//   );
// }

// export default Login;
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
// import React, { useState, useEffect } from 'react';
import Navi1 from './navi1';
import InputControl from './inputContol';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../firebase';
import Card from "@material-ui/core/Card";
import { useState, useEffect } from 'react';
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  where
} from 'firebase/firestore';
import { colors } from '@material-ui/core';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

function Login() {
    const navigate = useNavigate();
      const userCollectionRef = collection(db, 'adminUser');
      const [data, setData] = useState([]);
      const [mail,setMail]= useState("");


  const handleSubmit = (event) => {

    

  

    event.preventDefault();
    const dat = new FormData(event.currentTarget);
    setMail(dat.get('email'));
    console.log({
      email: dat.get('email'),
      password: dat.get('password'),
    });
    
  };
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(userCollectionRef);
        const fetchedData = querySnapshot.docs.map((doc) => doc.data());
        setData(fetchedData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
//   console.log(data);

  // Find the specific element based on a condition
  const specificElement = data.find((item) => item.mail === mail);
  console.log(JSON.stringify(specificElement))

  return (
    <dev>
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{backgroundColor:'#3F51B5'}}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </dev>

  );
}

export default Login;