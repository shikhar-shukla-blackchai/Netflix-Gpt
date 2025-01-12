import { useRef, useState } from "react";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { updateProfile } from "firebase/auth";

import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Header from "./Header";
import { USER_AVATER } from "../utils/constant";

const Login = () => {
  const [isSiginForm, setIsSigInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current?.value,
      password.current?.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSiginForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATER,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

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
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {!isSiginForm && (
            <div>
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="w-full bg-gray-700 text-white placeholder-gray-400 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          )}
          <div>
            <input
              ref={email}
              type="email"
              placeholder="Email or phone number"
              className="w-full bg-gray-700 text-white placeholder-gray-400 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full bg-gray-700 text-white placeholder-gray-400 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <p className="text-red-800 font-semibold text-xl">{errorMessage}</p>
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-semibold py-3 rounded hover:bg-red-700 transition duration-300"
            onClick={handleButtonClick}
          >
            {isSiginForm ? " Sign In" : "Sign Up"}
          </button>
        </form>
        <div className="flex justify-between items-center text-sm text-gray-400 mt-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 accent-gray-500" />
            Remember me
          </label>
          Need help?
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
            bot. Learn more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
