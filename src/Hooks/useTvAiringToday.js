import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTvAiringToday } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTvAiringToday = () => {
  const dispatch = useDispatch();

  const tvAiringToday = useSelector((store) => store.movies.TvAiringToday);

  const getTvAiringToday = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTvAiringToday(json.results));
  };

  useEffect(() => {
    !tvAiringToday && getTvAiringToday();
  }, []);
};
export default useTvAiringToday;
