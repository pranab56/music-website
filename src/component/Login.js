import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { app } from "./Firebase.init";
import { getAuth } from "firebase/auth";

import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Loading from "react-loading";

const Login = ({ setAuth }) => {
  const navigate = useNavigate();

  const firebaseAuth = getAuth(app);
  const [signInWithGoogle, user, loading, error] =
    useSignInWithGoogle(firebaseAuth);

    useEffect(()=>{
      if(window.localStorage.getItem("auth")==="true"){
        navigate("/",{replace:true})
      }
    },[]);



if(loading){
  return <Loading></Loading>
}


  if (user) {
    setAuth(true);
    window.localStorage.setItem("auth", "true");
    firebaseAuth.onAuthStateChanged((userCard) => {
      if (userCard) {
        userCard.getIdToken().then((token)=>{
          console.log(token);
         
        })
        navigate("/", { replace: true });
      } else {
        setAuth(false);
        navigate("/login");
      }
    });
  };

 

  return (
    <div className="relative w-screen h-screen">
      <div className="absolute inset-0 bg-gray-500 flex justify-center items-center p-4">
        <div className="w-full md:w-[375px] p4 bg-gray-200 shadow-2xl rounded-md backdrop-blur-md p-4 flex flex-col items-center justify-center">
          <div
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-gray-300 cursor-pointer hover:bg-white hover:shadow-md duration-100 ease-in-out transition-all"
            onClick={() => signInWithGoogle()}
          >
            <FcGoogle className="text-xl" />
            Sign in with Google
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
