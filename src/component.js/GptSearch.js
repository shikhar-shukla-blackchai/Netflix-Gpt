import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/constant";

const GptSearch = () => {
  return (
    <div className="relative min-h-screen bg-gray-900">
      <img
        src={BG_URL}
        alt="bgImg"
        className="fixed w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60"></div>
      <div className=" mx-auto px-4 py-24">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;
