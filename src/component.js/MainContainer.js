import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return null;

  const mainMovie = movies[Math.floor(Math.random() * movies.length)];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className=" h-screen w-full">
      <VideoBackground movieId={id} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
