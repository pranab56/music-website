import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="relative w-screen h-screen">
      <div className="absolute inset-0 bg-black flex justify-center items-center p-4">
        <div>
          <div>
            <FcGoogle/>
            Sign in with google
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
