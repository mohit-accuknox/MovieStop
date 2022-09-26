import React from "react";
import { useContext } from "react";
import { Movies } from "../../MovieData";
import HomeCard from "../HomePage/HomeCard";
import '../BookMark/Bookmark.css'

const BookmarkSection = () => {
  const { bookmarked } = useContext(Movies);

  return (
    <div>
      <section className="bookmarkSection bg-[#141414] text-white flex justify-start items-center flex-col p-8 gap-10 ">
        <h2>Bookmarks</h2>
        <section className="bookmarkCard w-full grid grid-cols-2 md:grid-cols-3 md: gap-10 gap-7 xl:flex mb-14 xl:justify-center xl:items-center xl:flex-wrap">
          {bookmarked.map((data) => {
            return <HomeCard cardData={data} key={data.id} />;
          })}
        </section>
      </section>
    </div>
  );
};

export default BookmarkSection;
