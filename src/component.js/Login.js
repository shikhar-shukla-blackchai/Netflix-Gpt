import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSiginForm, setIsSigInForm] = useState();

  const toggleSignInForm = () => {
    setIsSigInForm(!isSiginForm);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-4">
      <Header />
      <div className="absolute w-full max-w-md bg-black/75 p-8 rounded-md shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-6">
          {" "}
          {isSiginForm ? " Sign In" : "Sign Up"}
        </h1>
        <form className="space-y-4">
          {!isSiginForm && (
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-gray-700 text-white placeholder-gray-400 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          )}
          <div>
            <input
              type="email"
              placeholder="Email or phone number"
              className="w-full bg-gray-700 text-white placeholder-gray-400 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-gray-700 text-white placeholder-gray-400 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-semibold py-3 rounded hover:bg-red-700 transition duration-300"
          >
            {isSiginForm ? " Sign In" : "Sign Up"}
          </button>
        </form>
        <div className="flex justify-between items-center text-sm text-gray-400 mt-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 accent-gray-500" />
            Remember me
          </label>
          <a href="#" className="hover:underline">
            Need help?
          </a>
        </div>
        <div className="mt-6 text-gray-400 text-sm">
          <p
            className="text-white hover:underline cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSiginForm
              ? " New to Netflix? Sign up now"
              : "Already registered? Sign In now"}
          </p>
          <p className="text-xs mt-2">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Learn more.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
