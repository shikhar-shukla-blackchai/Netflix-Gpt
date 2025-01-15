import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className=" top-0 left-0 w-full h-full overflow-hidden z-0">
      <iframe
        className="w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1`}
        title="Movie Trailer"
        allow="autoplay; encrypted-media; picture-in-picture"
      />
    </div>
  );
};

export default VideoBackground;
