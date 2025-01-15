import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="px-4 -mt-28  rounded-lg shadow-md relative z-10">
      <div className="space-y-8">
        <MovieList title="Tv Airing Today" movies={movies.TvAiringToday} />
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Tv Top Rated" movies={movies.TvTopRated} />
        <MovieList title="Upcoming" movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
