import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "./Firebase.init";
import Loading from "../page/Loading";
import { useNavigate } from "react-router-dom";




const Login = () => {
  const navigate=useNavigate()
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
if(user){
  
}
if(loading){
  return <Loading></Loading>
}


  return (
    <div className="relative w-screen h-screen">
      <div className="absolute inset-0 bg-gray-500 flex justify-center items-center p-4">
        <div className="w-full md:w-[375px] p4 bg-gray-200 shadow-2xl rounded-md backdrop-blur-md p-4 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-gray-300 cursor-pointer hover:bg-white hover:shadow-md duration-100 ease-in-out transition-all"
          onClick={()=>signInWithGoogle()}
          >
            <FcGoogle className="text-xl"/>
            Sign in with Google
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
