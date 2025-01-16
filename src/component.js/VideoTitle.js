import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute md:bottom-36 md:left-4 bottom-[40.5rem] left-6 z-20 space-y-4 text-white">
      <h1 className="md:text-4xl font-bold drop-shadow-lg  ">{title}</h1>
      <p className="hidden md:inline-block text-lg max-w-xl">{overview}</p>
      <div className="flex space-x-4 ">
        <button className="bg-gray-800 text-white md:px-6 md:py-2 px-1 py-1 rounded-md hover:bg-opacity-80 flex items-center -mt-4 absolute">
          <img
            src="https://cdn-icons-png.flaticon.com/128/27/27223.png"
            alt="Play"
            className="w-6 mr-2"
          />
          Play
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
