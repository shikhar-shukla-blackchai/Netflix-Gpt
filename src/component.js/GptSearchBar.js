import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store?.config?.lang);

  return (
    <div className="pt-40 flex justify-center">
      <form className="w-1/2 bg-gray-900 rounded-lg overflow-hidden relative">
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
          type="text"
          className="p-4 pl-14 w-full bg-gray-800 text-white focus:outline-none"
          placeholder={lang[langkey].placeHolder}
        />
        <button className="bg-red-600 text-white px-6 py-4 hover:bg-red-700 absolute right-0 top-0">
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
