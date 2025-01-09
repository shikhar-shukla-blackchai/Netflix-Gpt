import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const navigate = useNavigate();

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
    <header className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-gradient-to-b from-black to-transparent z-50">
      {/* Logo and Navigation Links */}
      <div className="flex items-center space-x-8">
        {/* Netflix Logo */}
        <div className="w-36">
          <Logo className="w-full" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-white">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/tvshows" className="hover:text-gray-300">
            TV Shows
          </a>
          <a href="/movies" className="hover:text-gray-300">
            Movies
          </a>
          <a href="/new-popular" className="hover:text-gray-300">
            New & Popular
          </a>
          <a href="/mylist" className="hover:text-gray-300">
            My List
          </a>
        </nav>
      </div>

      {/* Profile/Account and Sign Out */}
      <div className="flex items-center space-x-2">
        {/* Search Icon */}
        <button className="text-white hover:text-gray-300">
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

        {/* Profile Icon */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="User Profile"
          className="w-8 h-8 rounded"
        />

        {/* Sign Out Button */}
        <button
          className="text-white  px-3 py-1 rounded hover:bg-red-700"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </header>
  );
};

export default Header;
