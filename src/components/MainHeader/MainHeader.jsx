import React, { Fragment, useContext } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "../MainHeader/MainHeader.css";
import { Movies } from "../../MovieData";
import HomePage from "../HomePage/HomePage";

const MainHeader = () => {
  const { popularMovieData, ImgUrl } = useContext(Movies);

  return (
    <div>
        <Swiper
          spaceBetween={0}
          modules={[Autoplay]}
          slidesPerView={1}
          onSwiper={(swiper) => swiper}
          autoplay={{ delay: 2000 }}
        >
          {popularMovieData.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <section className="cardSection h-[400px]">
                  <div className="overlay"></div>
                  <img
                    className="headerImg w-full object-cover bg-center"
                    src={ImgUrl + data.poster_path}
                    alt=""
                  />
                  <div className="container">
                    <h2 className="heading">{data.title}</h2>
                    <p className="paragraph">{data.overview}</p>
                  </div>
                </section>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <HomePage />
    </div>
  );
};

export default MainHeader;
