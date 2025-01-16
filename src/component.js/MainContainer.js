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
    <div className="relative h-screen overflow-hidden">
      <VideoBackground movieId={id} />
      <div className="absolute inset-0 md:bg-gradient-to-t from-black md:via-transparent to-black z-10" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;
