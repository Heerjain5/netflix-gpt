import { useState , useRef } from "react";
import Header from "./Header";
import {checkValidData}from "../utils/validate"
import { createUserWithEmailAndPassword, onAuthStateChanged , updateProfile,signInWithEmailAndPassword  } from "firebase/auth"; 
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";



const Login = () => {
const[isSignInForm, setIsSignInForm] = useState(true);
const [errorMessage , setErrorMessage] = useState(null);
const navigator = useNavigate();



const email = useRef(null);
const Password = useRef(null);
const Name = useRef(null);
const dispatch = useDispatch();



const handleButtonClick = () =>{
   // validate the form data
   
 const Message = checkValidData(email.current.value, Password.current.value );
  setErrorMessage(Message);
  if(Message) return;

 //sign in and sign up logic 
 if(!isSignInForm){
  // singup logic
createUserWithEmailAndPassword(
  auth,
  email.current.value,
   Password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
  displayName:Name.current.value, photoURL: "https://thumbs.dreamstime.com/b/spring-nature-scene-beautiful-landscape-tranquil-background-sunlight-scenic-beauty-meadow-backdrop-sunshine-green-grass-149811995.jpg"
}).then(() => {
  // Profile updated!
  const {uid , email,displayName, photoURL} = auth.currentUser;
     dispatch(addUser
      ({uid:uid,
        email:email ,displayName:displayName, photoURL:photoURL
      }));

  navigator("/browse");
  // ...
}).catch((error) => {
  // An error occurred
  // ...
  setErrorMessage(error.message);
});

    
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
    // ..
  });
 }
 else{
  // sign in logic
  signInWithEmailAndPassword(auth,
     email.current.value,
   Password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigator("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "-"+errorMessage); 
  });
 }

  
 
  
};
 


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

      <form 
       onSubmit={(e) => e.preventDefault()}
       className="w-3/12   absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-70">
      <h1 className="font-bold text-3xl py-4">
        {isSignInForm? "Sign In":"Sign Up"}
        </h1>
        {!isSignInForm && <input 
        ref={Name}
        type="text" 
         placeholder="Full Name"
          className="p-2 my-4 w-full text-black bg-gray-700"/>}

        <input 
        ref={email}
        type="text"
         placeholder="Email Address"
          className="p-2 my-4 w-full text-black bg-gray-700"/>

<input
ref={Password}
 type="Password" 
placeholder="Password"
 className="p-2 my-4 w-full text-black bg-gray-700 " />
<p 
className=" text-red-800 w-full text-lg py-2">
  {errorMessage}
  </p>

<button 
 className="p-4 my-6  w-full rounded-lg bg-red-700"
  onClick={handleButtonClick}>
 {isSignInForm? "Sign In":"Sign Up"}
 </button>
  <p 
  className="py-4 cursor-pointer"
  onClick={toggleSignInForm} >
    {isSignInForm?
     " New To Netflix? sign up now"
     :"Already Register?sign In now"}
    </p>
      </form>
   </div>
  );
};

export default Login;
