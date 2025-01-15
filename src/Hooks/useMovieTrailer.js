import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector((store) => store.movies.trailerVideo);

  const getMovieTrailer = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch trailer data: ${response.status}`);
      }

      const json = await response.json();
      console.log("json bg", json);
      const trailer = json.results?.find((video) => video.type === "Trailer");

      if (!trailer) {
        return;
      }

      dispatch(addTrailerVideo(trailer));
    } catch (error) {}
  };

  useEffect(() => {
    !nowPlayingMovies && getMovieTrailer();
  }, [movieId]);
  return;
};

export default useMovieTrailer;
