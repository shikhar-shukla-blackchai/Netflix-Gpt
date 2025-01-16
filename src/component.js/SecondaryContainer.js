import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="px-4 md:-mt-28 -mt-[20.5rem] rounded-lg shadow-md relative z-10">
      <div className="md:space-y-8 space-y-10">
        <MovieList title="Tv Airing Today" movies={movies.TvAiringToday} />
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Tv Top Rated" movies={movies.TvTopRated} />
        <MovieList title="Upcoming" movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
