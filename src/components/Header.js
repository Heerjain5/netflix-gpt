
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { lOGO, Supported_Languages } from "../utils/constants";
import { toggleGptSearchView } from "../utils/GPTSlice";
import lang from "../utils/languageConstant";
import {changeLanguage} from "../utils/ConfigSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch  = useSelector((store)=>store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch(() => navigate("/error"));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);


  const handleGptSearchClick = () =>{
    // toogle GPT Search 
    dispatch(toggleGptSearchView());
     
  }
const handlelanguagechange = (e) =>{
 
  dispatch(changeLanguage(e.target.value));

}
  

  return (
    <div className="absolute w-screen px-2 py-1 bg-gradient-to-b from-black z-10 flex  justify-between ">
      <img className="w-40  " src={lOGO} alt="logo" />
      {user && (
        <div className="flex p-2 ">
         {showGptSearch &&(
           <select className="p-2 m-2 bg-gray-900 text-white " onClick={handlelanguagechange}>
            {Supported_Languages.map((lang)=><option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          )}
          </select>
         )
          
         }
          <button className="px-1 py-1 -mt-2 mx-3   bg-purple-900 text-white rounded-lg"
          onClick={handleGptSearchClick}
          >{
            showGptSearch?"HomePage":"GPT Search"
          }
          </button>
          <img className="h-12 w-12 rounded" alt="Usericon" src={user?.photoURL} />
          <button onClick={handleSignOut} className="text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
