import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="w-screen  ">
      <iframe
        className="w-screen h-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}/?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="autoplay; encrypted-media; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
