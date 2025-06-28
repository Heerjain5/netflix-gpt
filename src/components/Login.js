import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);


  const email = useRef(null);
  const Password = useRef(null);
  const Name = useRef(null);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const Message = checkValidData(email.current.value, Password.current.value);
    setErrorMessage(Message);
    if (Message) return;

    if (!isSignInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, Password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        updateProfile(user, {
  displayName: Name.current.value,
  photoURL: USER_AVATAR,
})
  .then(() => {
    // Fetch the updated user from auth
    const updatedUser = auth.currentUser;
    dispatch(
      addUser({
        uid: updatedUser.uid,
        email: updatedUser.email,
        displayName: updatedUser.displayName,
        photoURL: updatedUser.photoURL, // ✅ will now reflect updated value
      })
    );
  })

            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.code + "-" + error.message);
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(auth, email.current.value, Password.current.value)
        .then((userCredential) => {
        
        })
        .catch((error) => {
          setErrorMessage(error.code + "-" + error.message);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative w-full h-screen">
      {/* Header */}
      <div className="z-10 relative">
        <Header />
      </div>

      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img
          src="https://dqae.org/wp-content/uploads/2022/09/234234-1140x641.jpg"
          alt="Netflix Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Login / Signup Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 bg-black bg-opacity-70 text-white rounded-lg shadow-lg z-10"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={Name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full text-white bg-gray-700 rounded"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full text-white bg-gray-700 rounded"
        />

        <input
          ref={Password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full text-white bg-gray-700 rounded"
        />

        <p className="text-red-500 text-sm py-2">{errorMessage}</p>

        <button
          className="p-4 my-6 w-full rounded-lg bg-red-700 hover:bg-red-800 transition"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="py-4 cursor-pointer hover:underline"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already registered? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
