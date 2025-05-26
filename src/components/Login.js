import { useState } from "react";
import Header from "./Header";

const Login = () => {

  const[isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);

  };
  return (
  <div>
      <div>
        <Header/>
      </div>
      <div className="absolute w-full h-full">
      <img  
  src="https://dqae.org/wp-content/uploads/2022/09/234234-1140x641.jpg"
  alt="Netflix Background"/>
      </div>

      <form className="w-3/12   absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-70">
      <h1 className="font-bold text-3xl py-4">
        {isSignInForm? "Sign In":"Sign Up"}
        </h1>
        {!isSignInForm && <input type="text"
         placeholder="Full Name"
          className="p-2 my-4 w-full text-black bg-gray-700"/>}

        <input type="email"
         placeholder="Email Address"
          className="p-2 my-4 w-full text-black bg-gray-700"/>

<input type="Password" 
placeholder="Password"
 className="p-2 my-4 w-full text-black bg-gray-700 " />

<button
 className="p-4 my-6  w-full rounded-lg bg-red-700">
 {isSignInForm? "Sign In":"Sign Up"}</button>
  <p className="py-4 cursor-pointer"onClick={toggleSignInForm}>
    {isSignInForm? " New To Netflix? sign up now":"Already Register?sign In now"}
    </p>
      </form>
   </div>
  );
};

export default Login;
