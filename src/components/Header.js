import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store=> store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-black via-gray-800 to-gray-700">
      {/* Left: Netflix Logo */}
      <img
        className="h-10"
        src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
        alt="logo"
      />

      {/* Right: User Icon + Sign Out */}
      {user && (<div className="flex items-center space-x-4 pr-2">
        <img
          className="h-10 w-10 rounded"
          alt="Usericon"src={user?.photoURL}  />
        <button
          onClick={handleSignOut}
          className="text-white hover:underline"
        >
          (Sign Out)
        </button>
      </div>)}
    </div>
  );
};

export default Header;
