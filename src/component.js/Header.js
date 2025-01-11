import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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

  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-gradient-to-b from-black to-transparent z-50">
      {/* Netflix Logo */}
      <div className="w-36">
        <img
          src={LOGO}
          alt="Netflix Logo"
          className="w-full cursor-pointer"
          onClick={() => navigate("/browse")}
        />
      </div>

      {/* Navigation Menu */}
      {user && (
        <nav className="hidden md:flex space-x-6 text-white">
          {["Home", "TV Shows", "Movies", "New & Popular", "My List"].map(
            (item) => (
              <a
                key={item}
                href={`/${item
                  .toLowerCase()
                  .replace(/ & /g, "-")
                  .replace(/ /g, "")}`}
                className="hover:text-gray-300 transition-colors"
              >
                {item}
              </a>
            )
          )}
        </nav>
      )}

      {/* Profile and Sign-Out */}
      {user && (
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button
            className="text-white hover:text-gray-300 transition-colors"
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
          </button>

          {/* User Profile Picture */}
          <img
            src={
              user?.photoURL ||
              "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            }
            alt="User Profile"
            className="w-8 h-8 rounded cursor-pointer"
            onClick={() => navigate("/profile")}
          />

          {/* Sign-Out Button */}
          <button
            className="text-white px-3 py-1 rounded bg-red-600 hover:bg-red-700 transition-colors"
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
