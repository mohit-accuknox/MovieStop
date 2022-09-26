import React from "react";
import { useContext } from "react";
import { Movies } from "../../MovieData";

const CastCard = ({cardData}) => {

    const {ImgUrl} = useContext(Movies);
  return (
    <div>
      <div className="castCard md:w-[200px]">
        <img
          className="rounded-xl shadow-md"
          src={ImgUrl + cardData.profile_path}
          alt="Picture Not Found"
        />
        <h2 className="mt-3">{cardData.name}</h2>
      </div>
    </div>
  );
};

export default CastCard;
