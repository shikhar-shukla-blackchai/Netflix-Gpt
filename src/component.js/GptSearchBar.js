import { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const langkey = useSelector((store) => store?.config?.lang);
  const searchText = useRef(null);

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuary = `Act as a movie recommendation system and suggest some movies for the query: ${searchText.current?.value}. Only give me the names of 5 movies, comma-separated like this: Gadar, Don, Sholay, Golmaal, Koi Mil Gaya.`;

    try {
      const getResult = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuary }],
        model: "gpt-4o-mini",
      });

      const getMovies = getResult?.choices[0]?.message?.content.split(",");

      const promiseArray = getMovies.map((movie) => searchMovieTmdb(movie)); //[pro..1,pro..2,pro..3,pro..4,pro..5]

      const tmdbResult = await Promise.all(promiseArray);

      dispatch(
        addGptMovieResult({ movieNames: getMovies, movieResults: tmdbResult })
      );
    } catch (error) {
      console.error("Error fetching data from OpenAI API:", error.message);
      alert(
        "Unable to fetch data. Please check your API quota or try again later."
      );
    }
  };

  return (
    <div className="pt-40 flex justify-center">
      <form
        className="w-full md:w-1/2 bg-gray-900 rounded-lg overflow-hidden relative"
        onSubmit={(e) => e.preventDefault()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-4 top-4 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0"
          />
        </svg>
        <input
          ref={searchText}
          type="text"
          className="p-4 md:pl-14 w-full bg-gray-800 text-white focus:outline-none relative z-10 "
          placeholder={lang[langkey].placeHolder}
        />
        <button
          className="bg-red-600 text-white px-6 py-4 hover:bg-red-700 absolute right-0 top-0 z-20"
          onClick={handleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
