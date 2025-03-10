import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import useTvAiringToday from "../Hooks/useTvAiringToday";
import useTvTopRated from "../Hooks/useTvTopRated";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useTvTopRated();
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTvAiringToday();

  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-x-hidden">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
