import Login from "./Login";
import Browse from "./Browse";
import { Routes, Route } from "react-router-dom";
import { BG_URL } from "../utils/constant";

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
              backgroundImage: `url('${BG_URL}')`,
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
