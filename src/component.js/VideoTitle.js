import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute bottom-32 left-8 z-10 text-white space-y-4">
      <h1 className="text-4xl font-extrabold drop-shadow-lg">{title}</h1>
      <p className="text-base text-gray-300 max-w-2xl">{overview}</p>
      <div className="flex space-x-4">
        <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-opacity-70 flex">
          <img
            className="w-3 self-center mr-1"
            src="https://cdn-icons-png.flaticon.com/128/27/27223.png"
            alt="playButton"
          />{" "}
          Play
        </button>
        <button className="bg-gray-200 text-white px-6 py-2 rounded-md bg-opacity-30 hover:bg-opacity-55 flex">
          <img
            className="h-7 self-center mr-2 "
            src="https://cdn-icons-png.flaticon.com/128/12006/12006814.png"
            alt="infoButton"
          />{" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
