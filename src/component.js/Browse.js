import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
       * MainContainer
       *   - videoBackground
       *   - VideoTitle
       *   - play button
       *   - More Info
       * SecondaryContainer
       *   - MovieList * n
       *   - cards * n
       */}
    </div>
  );
};

export default Browse;
