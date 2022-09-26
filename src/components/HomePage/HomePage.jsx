import React, { Fragment, useContext, useState } from "react";
import HomeCard from "./HomeCard";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "../HomePage/HomeCard.css";
import { Movies } from "../../MovieData";
import { useQuery } from "react-query";

const HomePage = () => {
  const { trendingMovie, topRated, trendingTv, topRatedTv } =
    useContext(Movies);

  // console.log(topRated);

  // const { data } = useQuery("cast", () => {
  //   const castData = fetch(
  //     `https://api.themoviedb.org/3/tv/${238}/credits?api_key=0f6ea7d2197801e28575e9c9815767bb&language=en-US`
  //   ).then(res => console.log(res.json()))
  // });

  return (
    <div>
      <section className="bg-[#141414] w-full h-full text-white p-3 md:p-5">
        <section className="trending mt-20 flex justify-center items-start flex-col gap-10">
          <h2>Trending Movies</h2>
          <div className="movieCard w-full flex justify-start items-center ">
            <Swiper
              breakpoints={{
                100: {
                  slidesPerView: 2.5,
                  spaceBetween: 80,
                },
                500: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween:0,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween:0,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween:10,
                },
                1500:{
                  slidesPerView:6,
                  spaceBetween:10,
                }
              }}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              {trendingMovie.map((data) => {
                return (
                  <SwiperSlide key={data.id}>
                    <HomeCard cardData={data} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
        <section className="topRated  mt-20 flex justify-center items-start flex-col gap-10">
          <h2>Top Rated Movies</h2>
          <div className="movieCard w-full flex justify-start items-center">
            <Swiper
              breakpoints={{
                100: {
                  slidesPerView: 2.5,
                  spaceBetween: 80,
                },
                500: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
                1500:{
                  slidesPerView:6,
                  spaceBetween:10,
                }
              }}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              {topRated.map((data) => {
                return (
                  <SwiperSlide key={data.id}>
                    <HomeCard cardData={data} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
        <section className="topRated  mt-20 flex justify-center items-start flex-col gap-10">
          <h2>Trending Tv</h2>
          <div className="movieCard w-full flex justify-start items-center">
            <Swiper
              breakpoints={{
                100: {
                  slidesPerView: 2.5,
                  spaceBetween: 80,
                },
                500: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
                1500:{
                  slidesPerView:6,
                  spaceBetween:10,
                }
              }}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              {trendingTv.map((data) => {
                return (
                  <SwiperSlide key={data.id}>
                    <HomeCard cardData={data} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
        <section className="topRated  mt-20 flex justify-center items-start flex-col gap-10 mb-28">
          <h2>Top Rated Tv</h2>
          <div className="movieCard w-full flex justify-start items-center">
            <Swiper
              breakpoints={{
                100: {
                  slidesPerView: 2.5,
                  spaceBetween: 80,
                },
                500: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween:20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween:30,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween:40,
                },
                1500:{
                  slidesPerView:6,
                  spaceBetween:10,
                }
              }}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              {topRatedTv.map((data) => {
                return (
                  <SwiperSlide key={data.id}>
                    <HomeCard cardData={data} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
      </section>
    </div>
  );
};

export default HomePage;
