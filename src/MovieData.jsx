import React, { createContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";

export const Movies = createContext();

const MovieData = ({ children }) => {
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [trendingTv, setTrendingTv] = useState([]);
  const [topRatedTv, setTopRatedTv] = useState([]);
  const [popularMovieData, setPopularMovie] = useState([]);
  const [inputText, setInputText] = useState("");
  const [searchedMovie, setSearchedMovie] = useState([]);

  const bookmarkFromLocalStorage = JSON.parse(window.localStorage.getItem("bookmark") || "[]");

  const [bookmarked, setBookmarked] = useState(bookmarkFromLocalStorage);

  useEffect(() => {
    window.localStorage.setItem("bookmark",JSON.stringify(bookmarked));
  }, [bookmarked])

  


  

  const ApiKey = "?api_key=0f6ea7d2197801e28575e9c9815767bb";
  const BaseUrl = "https://api.themoviedb.org/3";
  const popularMoviePath = "/movie/popular";
  const ImgUrl = "https://image.tmdb.org/t/p/w500";
  const TrendingMovies = "/trending/movie/day";
  const TopRated = "/movie/top_rated";
  const SearchMovieUrl = "/search/movie";

  const {} = useQuery("trending", () => {
    fetch(`${BaseUrl}${TrendingMovies}${ApiKey}`)
      .then((res) => res.json())
      .then((data) => setTrendingMovie(data.results));
  });

  //   ==============TopRatedMovies==================

  const {} = useQuery("topRated", () => {
    fetch(`${BaseUrl}${TopRated}${ApiKey}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => setTopRated(data.results));
  });

  //   ===========trending tv shows===================
  const {} = useQuery("trendingtv", () => {
    fetch(`${BaseUrl}/trending/tv/day${ApiKey}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => setTrendingTv(data.results));
  });

  //   ======trending top rated=================
  const {} = useQuery("trendingtoprated", () => {
    fetch(`${BaseUrl}/tv/top_rated${ApiKey}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => setTopRatedTv(data.results));
  });

  const { data } = useQuery("movies", () => {
    fetch(`${BaseUrl}${popularMoviePath}${ApiKey}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => setPopularMovie(data.results));
  });

  return (
    <Movies.Provider
      value={{
        trendingMovie,
        topRated,
        trendingTv,
        topRatedTv,
        popularMovieData,
        popularMoviePath,
        inputText,
        setInputText,
        ApiKey,
        BaseUrl,
        SearchMovieUrl,
        setSearchedMovie,
        searchedMovie,
        ImgUrl,
        bookmarked,
        setBookmarked,
      }}
    >
      {children}
    </Movies.Provider>
  );
};

export default MovieData;
