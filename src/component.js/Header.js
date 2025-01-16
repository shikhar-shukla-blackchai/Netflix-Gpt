import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-gradient-to-b from-black to-transparent z-50 flex-col md:flex-row ">
      {/* Netflix Logo */}
      <div className="w-36">
        <img
          src={LOGO}
          alt="Netflix Logo"
          className="w-full cursor-pointer"
          onClick={() => navigate("/browse")}
        />
      </div>

      {user && (
        <div className="flex md:items-center justify-between space-x-4">
          {showGptSearch && (
            <select
              className="p-2 bg-gray-900 text-white "
              onClick={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifer} value={lang.identifer}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className={
              "text-white hover:text-gray-300 transition-colors flex bg-purple-800 rounded-lg py-2 md:py-1 px-4" // Added md:py-1 for mobile compatibility
            }
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 19a8 8 0 100-16 8 8 0 000 16zm0 0l6 6"
              />
            </svg>
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>

          {/* User Profile Picture */}
          <img
            src={
              user?.photoURL ||
              "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            }
            alt="User Profile"
            className="w-9 h-9 rounded cursor-pointer hidden md:block"
            onClick={() => navigate("/profile")}
          />

          {/* Sign-Out Button */}
          <button
            className="text-white md:px-4 md:py-2 rounded md:bg-red-600 md:hover:bg-red-700 transition-colors text-nowrap"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
