import React from 'react';

const MyIcon = ({ videoId, onClick }) => {
  return (
    <button
      className="absolute top-0 right-0 -mt-4 mr-4 bg-gray-200 rounded-full p-2 text-gray-500 hover:bg-gray-300"
      onClick={() => onClick(videoId)}
      aria-label="More videos like this"
    >
      i
    </button>
  );
};

export default MyIcon;
