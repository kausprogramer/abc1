import './App.css';
import User from './components/user';
import { BrowserRouter as  Router,Routes,Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';
import { auth } from './firebase';
import { useEffect, useState } from 'react';
function App() {
  const [userName, setUserName] = useState("");
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                setUserName(user.displayMail);
            }
            else{
                setUserName("");
            }
        });
    },[])
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/login" element={<Login/>}/>
          <Route path = "/signup" element={<Signup/>}/>
          <Route path = "/" element={<Home Mail={userName}/>}/>
          <Route path='/user' element={<User Mail={userName}/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
