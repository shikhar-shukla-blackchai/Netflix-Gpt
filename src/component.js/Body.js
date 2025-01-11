import Login from "./Login";
import Browse from "./Browse";
import { Routes, Route } from "react-router-dom";

const Body = () => {
  return (
    <Routes>
      {/* Route for the Login page */}
      <Route
        path="/"
        element={
          <div
            className="relative min-h-screen bg-cover bg-center"
            style={{
              backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_medium.jpg')`,
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Login Form */}
            <div className="relative z-10 flex items-center justify-center min-h-screen">
              <Login />
            </div>
          </div>
        }
      />

      {/* Route for the Browse page */}
      <Route path="/browse" element={<Browse />} />
    </Routes>
  );
};

export default Body;
