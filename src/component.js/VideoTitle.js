import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute bottom-36 left-10 z-20 space-y-4 text-white">
      <h1 className="text-4xl font-bold drop-shadow-lg">{title}</h1>
      <p className="text-lg max-w-xl">{overview}</p>
      <div className="flex space-x-4">
        <button className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-opacity-80 flex items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/27/27223.png"
            alt="Play"
            className="w-6 mr-2"
          />
          Play
        </button>
        <button className="border border-gray-800 text-gray-300 px-6 py-2 rounded-md hover:text-white hover:border-white flex items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/12006/12006814.png"
            alt="Info"
            className="w-6 mr-2"
          />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
