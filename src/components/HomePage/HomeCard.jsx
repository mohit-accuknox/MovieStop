import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../HomePage/HomeCard.css";
import { AnimatePresence, motion } from "framer-motion";
import { Movies } from "../../MovieData";
import { useEffect } from "react";

const HomeCard = ({ cardData }) => {
  const [isBookmarkOpen, setIsBookmarkOpen] = useState(false);

  const ImgUrl = "https://image.tmdb.org/t/p/w500";

  const { bookmarked, setBookmarked } = useContext(Movies);

  // console.log(cardData)

  const bookmarkPresent = (data) => {
    return bookmarked.some((bookmarkData) => bookmarkData.id === data.id);
  };
  // console.log(bookmarked);

  return (
    <div>
      <section
        className="homecard relative hover:cursor-pointer sm:w-[200px] md:w-[250px] w-[150px] lg:w-[300px]"
        key={cardData.id}
      >
        <span
          className="absolute top-2 bg-[rgba(76,76,76,0.4)] hover:bg-[rgba(76,76,76,0.8)] rounded-full flex justify-center items-center 
          w-[35px] h-[35px] right-2"
          onClick={() => setIsBookmarkOpen(!isBookmarkOpen)}
        >
          {/* {isBookmarkOpen ? (
            <motion.img
            initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "20px" }}
              transition={{
                duration: 0.6,
              }}
              src="/images/active_bookmark.png"
              alt=""
              onClick={() => setBookmarked(data => data.filter(bookmark => bookmark.id !== cardData.id))}
            />
          ) : (
            <img className="w-[20px]" src="/images/notActive_bookmark.png" alt=""  
            onClick={(bookmarkedData) => setBookmarked((data) => [...data,cardData])}/>
          )} */}

          {bookmarkPresent(cardData) ? (
            <motion.img
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "20px" }}
              transition={{
                duration: 0.6,
              }}
              src="/images/active_bookmark.png"
              alt=""
              onClick={() =>
                setBookmarked((data) =>
                  data.filter((bookmark) => bookmark.id !== cardData.id)
                )
              }
            />
          ) : (
            <img
              
              className="w-[20px]"
              src="/images/notActive_bookmark.png"
              alt=""
              onClick={() => setBookmarked((data) => [...data, cardData])}
            />
          )}
        </span>
        <Link to="moviedetail" state={cardData}>
          <div className="img">
            <img
              className="rounded-2xl"
              src={ImgUrl + cardData.poster_path}
              alt={cardData.title}
            />
          </div>
        </Link>
        <h2>
          {cardData.title}
          {cardData.name}
        </h2>
      </section>
    </div>
  );
};

export default HomeCard;
