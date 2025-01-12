const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute bottom-44 left-8 z-10 space-y-4">
      <h1 className="text-3xl font-extrabold drop-shadow-lg">{title}</h1>
      <p className="text-gray-300 text-base max-w-xl">{overview}</p>
      <div className="flex space-x-4">
        <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-opacity-80 flex items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/27/27223.png"
            alt="Play"
            className="w-4 mr-2"
          />
          Play
        </button>
        <button className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-800 flex items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/12006/12006814.png"
            alt="Info"
            className="w-5 mr-2"
          />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
