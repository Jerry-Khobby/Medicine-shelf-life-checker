import React from 'react';

const SuggestCard = ({heading, description, usage, imageUrl} ) => {
  return (
    <div
      className="p-4 border rounded-lg shadow-md sm:w-[20rem] lg:w-96 md:w-[22rem] w-[20rem] h-36 flex flex-col bg-cover bg-center cursor-pointer transition duration-500 ease-in-out hover:border-blue-500 hover:scale-105 hover:shadow-lg"
      style={{ backgroundImage: ` linear-gradient(to bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.8)),url(${imageUrl})` }}
    >
      <h3 className="text-md font-md font-mono  bg-opacity-75 p-1 rounded text-white">{heading}</h3>
      <p className=" text-sm font-medium font-sans flex flex-row gap-2  bg-opacity-75 p-1 rounded text-white">
        {description}
      </p>
      <p className="text-sm font-medium font-sans flex flex-row gap-2  bg-opacity-75 p-1 rounded text-white">
        {usage}
      </p>
    </div>
  );
};

export default SuggestCard;
