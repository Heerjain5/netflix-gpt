
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { lOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

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

  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-gradient-to-b from-black to-transparent z-20">
      <img className="h-10" src={lOGO} alt="logo" />
      {user && (
        <div className="flex items-center space-x-4 pr-2">
          <img className="h-10 w-10 rounded" alt="Usericon" src={user?.photoURL} />
          <button onClick={handleSignOut} className="text-white hover:underline">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
