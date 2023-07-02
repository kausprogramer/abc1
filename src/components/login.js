import React, { useState, useEffect } from 'react';
import Navi1 from './navi1';
import InputControl from './inputContol';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../firebase';
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

function Login() {
  const [values, setValues] = useState({
    email: '',
    pass: ''
  });
  const [isAutha, setIsAutha] = useState(0);
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const userCollectionRef = collection(db, 'adminUser');
  const [items, setItems] = useState([]);

  const addUser = (newUser) => {
    return addDoc(userCollectionRef, newUser);
  };
  const fetcheditems=[];
  useEffect(() => {
    const fetchData = async () => {
      if (!values.email) return;

      try {
        const querySnapshot = await getDocs(
          collection(db, 'adminUser')
        );

        querySnapshot.forEach((doc) => {
            fetcheditems.push(doc.data());
        });
        setItems(fetcheditems);
       
        
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [values.email]);
  for (const a of fetcheditems) {
    if (a.email === values.email) {
      console.log(a.newUser.isAuth);
    }
  } 
  const handleSubmit = async () => {
    console.log(values);
    if (!values.email || !values.pass) {
      setErrMsg('Please Fill All Fields');
      return;
    }

    setSubmitDisabled(true);
    setErrMsg('');

    try {
      const res = await signInWithEmailAndPassword(auth, values.email, values.pass);
      console.log(res);
      const { email, name, user } = values;
      await updateProfile(user, { displayName: name });
      // await addUser({ newUser });
      setSubmitDisabled(false);
      if (isAutha) {
        navigate('/');
      } else {
        navigate('/user', {email: email});
      }
    } catch (err) {
      setErrMsg(err);
      setSubmitDisabled(false);
    }
  };

  return (
    <div>
      <Navi1 />
      <InputControl
        type="text"
        label="Email: "
        placeholder="Enter Your Email ID"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, email: event.target.value }))
        }
      />
      <InputControl
        type="password"
        label="Password: "
        placeholder="*********"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, pass: event.target.value }))
        }
      />
      <div>
        <b>{errMsg}</b>
        <br />
        <button onClick={handleSubmit} disabled={submitDisabled}>
          Login
        </button>
        <p>
          Don't have an existing account?{' '}
          <Link style={{ color: 'black' }} to={'/signup'}>
            signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
