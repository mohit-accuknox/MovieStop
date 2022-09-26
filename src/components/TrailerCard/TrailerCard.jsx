import React from "react";

const TrailerCard = ({trailerData}) => {
  return (
    <div>
      <div className="flex justify-center items-start flex-col gap-5 mt-10 lg:p-8">
        <h2 className="font-medium text-xl">{trailerData.name}</h2>
        <iframe
          src={`https://www.youtube.com/embed/${trailerData.key}`}
          width="100%"
          className="h-[300px] lg:h-[500px]"
        ></iframe>
      </div>
    </div>
  );
};

export default TrailerCard;
