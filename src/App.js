
import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Routes,Route, useNavigate } from 'react-router-dom';

import './App.css';
import { app } from './component/Firebase.init';
import {AnimatePresence} from "framer-motion"





import Home from './component/Home';
import Login from './component/Login';

function App() {
  const navigate=useNavigate()
  const firebaseAuth=getAuth(app);

  const [auth,setAuth]=useState(false||window.localStorage.getItem("auth")==="true");

useEffect(()=>{
  firebaseAuth.onAuthStateChanged((userCard)=>{
    if(userCard){
      userCard.getIdToken().then((token)=>{
        console.log(token);
      })
    }
    else{
      setAuth(false);
      window.localStorage.setItem("auth","false");
      navigate('/login')
    }
  })
},[])
  return (
    <AnimatePresence exitBeforeEnter>
    <div className="h-auto min-w-[680px] justify-center items-center">
      <Routes>
        <Route path='/' element={<Home> </Home>}></Route>
        <Route path='/login' element={<Login setAuth={setAuth}></Login>}></Route>
      </Routes>
    </div>
    </AnimatePresence>
  );
}

export default App;
