import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse.js";
import Login from "./Login.js";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.js";


const Body=()=>{
  const dispatch = useDispatch();
  
    const appRouter = createBrowserRouter([{
        path:"/",
        element:<Login/>
    },
    {
    path:"/browse",
    element:<Browse/>
    },
    
    
    ]);
    useEffect(()=>{
      const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
   const {uid , email,displayName, photoURL} = user;
   dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL:photoURL}));



  } 
  else {
   dispatch(removeUser());
 
  }
});
    },[]);

    return (
  <div>
    <RouterProvider router={appRouter}/>
  </div>
    );
}
export default Body;