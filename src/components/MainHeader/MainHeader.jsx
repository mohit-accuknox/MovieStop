import React, { Fragment, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "../MainHeader/MainHeader.css";
import { Movies } from "../../MovieData";
import HomePage from "../HomePage/HomePage";
import { data } from "autoprefixer";

const MainHeader = () => {
  const { popularMovieData, ImgUrl } = useContext(Movies);

  return (
    <div>
      <div className="overlay"></div>
      <Swiper
        spaceBetween={0}
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
      >
        {popularMovieData.map((data) => {
          return (
            <SwiperSlide key={data.id}>
              <section
                className="cardSection h-[400px] md:h-[500px] lg:h-[500px] xl:h-[700px]"
                style={{
                  backgroundImage: `url(${ImgUrl + data.poster_path})`,
                  // backgroundColor: rgba(0,0,0,0.
                }}
              >
                {/* <div className="overlay"></div> */}
                {/* <img
                className="headerImg w-full object-cover bg-center" src=
                {ImgUrl + data.poster_path}
                alt="" /> */}
                <div className="container flex justify-center items-start flex-col md:flex-row lg:w-full lg:items-center">
                  <div className="flex justify-center gap-8 items-start h-full flex-col xl:w-[40%] xl:gap-8">
                    <h2 className="heading xl:text-4xl">{data.title}</h2>
                    <p className="paragraph xl:text-xl">{data.overview}</p>
                    {/* <button
                      className="trailerBtn flex justify-center items-center outline-none  hover:bg-red-600 text-white p-2 w-[150px] h-[5F0px] rounded-[50px]
                    bg-transparent border-2 border-red-600 transition ease-linear delay-75 "
                    >
                      Watch Trailer
                    </button> */}
                  </div>

                  <img
                    className="hidden md:block w-[200px] h-[300px] xl:w-[400px] xl:h-[500px] object-cover rounded-lg shadow-md hover:cursor-pointer transition ease-linear delay-75 hover:scale-[1.02]"
                    src={ImgUrl + data.poster_path}
                    alt=""
                  />
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
