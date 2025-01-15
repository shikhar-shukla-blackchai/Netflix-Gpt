import { useRef, useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const scrollContainerRef = useRef(null);
  const [showRightButton, setShowRightButton] = useState(false);
  const [showLeftButton, setShowLeftButton] = useState(false);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const containerRef = scrollContainerRef.current;

    const handleScrollEnd = () => {
      if (!containerRef) return;

      const containerWidth = containerRef.scrollWidth;
      const visibleWidth = containerRef.clientWidth;
      const scrollLeft = containerRef.scrollLeft;

      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(containerWidth > visibleWidth + scrollLeft);
    };

    const handleMouseEnter = () => {
      handleScrollEnd();
    };

    if (containerRef) {
      containerRef.addEventListener("scroll", handleScrollEnd);
      containerRef.addEventListener("mouseenter", handleMouseEnter);
    }

    return () => {
      if (containerRef) {
        containerRef.removeEventListener("scroll", handleScrollEnd);
        containerRef.removeEventListener("mouseenter", handleMouseEnter);
      }
    };
  }, [movies]);

  return (
    <div className="relative">
      <h2>{title}</h2>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto no-scrollbar"
      >
        <button
          onClick={() => handleScroll("left")}
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full ${
            !showLeftButton && "hidden"
          }`}
        >
          &#8249;
        </button>
        <div className="flex space-x-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
        <button
          onClick={() => handleScroll("right")}
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full ${
            !showRightButton && "hidden"
          }`}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default MovieList;
