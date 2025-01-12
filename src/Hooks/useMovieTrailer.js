import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

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
      const trailer = json.results?.find((video) => video.type === "Trailer");

      if (!trailer) {
        console.warn(`No trailer found for movie ID: ${movieId}`);
        return;
      }

      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Error fetching movie trailer:", error);
    }
  };

  useEffect(() => {
    getMovieTrailer();
  }, [movieId]); // Dependency array to trigger refetch on movieId change

  return; // No need to explicitly return anything from a React hook
};

export default useMovieTrailer;
