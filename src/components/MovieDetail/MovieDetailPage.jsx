import React, { Fragment } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { Movies } from "../../MovieData";
import CastCard from "../CastCard/CastCard";
import "../MovieDetail/MovieDetail.css";
import TrailerCard from "../TrailerCard/TrailerCard";

const MovieDetailPage = () => {
  const { ImgUrl } = useContext(Movies);

  const [castData, setCastData] = useState([]);

  const [videoContent, setVideoContent] = useState([]);

  const [movieGenre, setMovieGenre] = useState([]);

  // console.log(castData);

  const location = useLocation();
  const MovieData = location.state;

  // console.log(MovieData);

  // =====function to filter out the null profile_path===============

  const creditFilter = (creditImg) => {
    const imageExist = creditImg.filter((data) => data.profile_path !== null);

    return setCastData(imageExist);
  };

  // ==============function to fetch cast of the movie================

  const { data } = useQuery("cast", () => {
    const celebData = fetch(
      `https://api.themoviedb.org/3/tv/${MovieData.id}/credits?api_key=0f6ea7d2197801e28575e9c9815767bb&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => creditFilter(data.cast));
  });

  // =========function to fetch only official video===============

  const officialVideo = (videoData) => {
    const trueVideo = videoData.filter((data) => data.official !== false);

    return setVideoContent(trueVideo);
  };
  // ===========function to fetch video ================

  const {} = useQuery("videoDetail", () => {
    const videoUrl = fetch(
      `https://api.themoviedb.org/3/movie/${MovieData.id}/videos?api_key=0f6ea7d2197801e28575e9c9815767bb&language=en`
    )
      .then((res) => res.json())
      .then((data) => setVideoContent(data.results));
  });

  // console.log(castData);

  // ==========function to fetch Genres========================
  // const fetchGenre = (genreData) => {
  //   const filterGenre = MovieData.filter(data => data.genre_ids === genreData.id);
  //   console.log(filterGenre);
  // }

  // console.log(MovieData);
  // ====================function to fetch genre=====================
  // const {} = useQuery("genre",() => {
  //   const movieGenre = fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=0f6ea7d2197801e28575e9c9815767bb&language=en-US`)
  //   .then(res => res.json())
  //   .then(data => fetchGenre(data.genres))
  // });

  // console.log(videoContent)
  return (
    <div>
      <section className="bg-[#141414] text-white flex justify-center items-center flex-col relative">
        <section className="posterContainer w-full">
          <div className="overlay-img"></div>
          <img src={ImgUrl + MovieData.poster_path} alt="" />
        </section>
        <section className="z-10 movieInfo p-5 flex justify-center items-center flex-col gap-6 md:flex-row">
          <div className="w-full md:flex md:justify-center md:items-center gap-10 lg:p-8 xl:w-[60%] xl:p-2">
            <img
              className="hidden md:block w-[200px] h-[300px] xl:w-[400px] xl:h-[500px] rounded-lg shadow-md hover:cursor-pointer transition ease-linear delay-75 hover:scale-[1.02]"
              src={ImgUrl + MovieData.poster_path}
              alt=""
            />
            <div className="flex justify-center items-center flex-col gap-6">
              <h2 className="text-left w-full font-extrabold text-4xl">
                {MovieData?.name ||
                  MovieData?.original_name ||
                  MovieData?.title ||
                  MovieData?.original_title}
              </h2>
              <p className="text-justify w-full font-light text-sm">
                {MovieData.overview}
              </p>
              {/* <div></div> */}
            </div>
          </div>
        </section>
        {castData?.length ? (
          <section className="cast flex xl:mt-[400px] justify-center items-start gap-5 flex-col w-full p-5 mt-[150px] md:mt-[250px] lg:p-14">
            <h2 className="font-medium text-xl">Casts</h2>
            <div className="grid grid-cols-3 gap-3">
              {castData.map((data) => {
                return (
                  <Fragment key={data.id}>
                    <CastCard cardData={data} />
                  </Fragment>
                );
              })}
            </div>
          </section>
        ) : null}

        <section
          className={
            castData.length
              ? "trailers mt-24 w-full p-5 mb-24 md:mt-[200px] xl:mt-[100px] xl:w-[70%]"
              : "trailers mt-24 w-full p-5 mb-24 md:mt-[200px] xl:mt-[400px] xl:w-[70%]"
          }
        >
          {videoContent.map((data) => {
            return (
              <Fragment key={data.id}>
                <TrailerCard trailerData={data} />
              </Fragment>
            );
          })}
        </section>
      </section>
    </div>
  );
};

export default MovieDetailPage;
