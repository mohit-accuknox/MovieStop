import React, { Fragment, useContext } from "react";
import { Movies } from "../../MovieData";
import HomeCard from "../HomePage/HomeCard";
import { motion } from "framer-motion";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";

const MovieSearch = (searchData) => {
  const {
    trendingMovie,
    inputText,
    setInputText,
    ApiKey,
    setSearchedMovie,
    searchedMovie,
  } = useContext(Movies);

  //   =====fetching movies based on search value==============
  const { mutate } = useMutation(() => {
    const movieSearch = fetch(
      `
      https://api.themoviedb.org/3/search/movie${ApiKey}&query=${inputText}`
    )
      .then((res) => res.json())
      .then((data) => setSearchedMovie(data.results));
    return movieSearch;
  });

  //   ===function stores search value to inputText state============

  const MovieSearchValue = (e) => {
    const enteredValue = e.target.value;

    setInputText(enteredValue);
  };

  //   ========search button to handle input value==============

  const handleSearchBtn = (e) => {
    mutate(inputText);
  };

  return (
    <div>
      <section className="bg-[#141414] p-5 flex justify-center items-center flex-col gap-10">
        <div className="flex justify-center w-full items-center gap-4">
          <motion.input
            initial={{ width: 0 }}
            animate={{ width: "300px" }}
            transition={{ duration: 0.7 }}
            type="text"
            onChange={MovieSearchValue}
            placeholder={searchData.placeholder}
            className="bg-black text-white p-2 w-[300px] rounded-[50px] transition ease-in delay-75 focus:outline-none focus:ring focus:ring-red-600"
          />
          <motion.button
            initial={{ width: 0, display: "none" }}
            animate={{ width: "130px", display: "block" }}
            transition={{ delay: 0.7, duration: 0.6 }}
            onClick={handleSearchBtn}
            className="bg-[red] text-white p-2 w-[130px] rounded-[50px] hover:shadow-red-700 hover:shadow-sm hover:bg-red-600 font-medium transition ease-in delay-75"
          >
            Search
          </motion.button>
        </div>

        <section className="w-full grid grid-cols-2 sm:flex sm:justify-center sm:items-start sm:flex-wrap gap-10 text-white mb-28 mt- overflow-hidden">
            {inputText
              ? searchedMovie.map((data) => {
                  return (
                    <Fragment key={data.id}>
                      <HomeCard cardData={data} />
                    </Fragment>
                  );
                })
              : trendingMovie.map((data) => {
                  return (
                    <Fragment key={data.id}>
                      <HomeCard cardData={data} />
                    </Fragment>
                  );
                })}
        </section>
      </section>
    </div>
  );
};

export default MovieSearch;
