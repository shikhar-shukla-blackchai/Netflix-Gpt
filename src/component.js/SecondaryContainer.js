import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const moviesTV = useSelector((store) => store.movies.TvAiringToday);
  console.log("moviesTV", moviesTV);
  return (
    <div className="px-6 space-y-8 bg-black">
      <div className="-mt-36 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Tv Airing Today"} movies={movies.TvAiringToday} />
        <MovieList title={"Tv Top Rated"} movies={movies.TvTopRated} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
