import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import useTvAiringToday from "../Hooks/useTvAiringToday";
import useTvTopRated from "../Hooks/useTvTopRated";

const Browse = () => {
  useTvTopRated();
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTvAiringToday();

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
