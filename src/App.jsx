import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "../src/components/Header/Header";
import MainHeader from "./components/MainHeader/MainHeader";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import { AnimatePresence } from "framer-motion";
import MovieData from "./MovieData";
import { Route, Routes } from "react-router-dom";
import MovieSearch from "./components/SeachMovie/MovieSearch";
import MovieDetailPage from "./components/MovieDetail/MovieDetailPage";
import BookmarkSection from "./components/BookMark/BookmarkSection";
// import TrailerVideo from "./components/TrailerVideo/TrailerVideo";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <MovieData>
        <AnimatePresence>
          <Header />
          <Routes>
            <Route path="/" element={<MainHeader/>}/>
            <Route path="movies" element={<MovieSearch/>}/>
            <Route path="bookmark" element={<BookmarkSection/>}/>
            <Route path="/movies/moviedetail" element={<MovieDetailPage/>}/>
            <Route path="moviedetail" element={<MovieDetailPage/>}/>
          </Routes>
          <Footer />
        </AnimatePresence>
      </MovieData>
    </QueryClientProvider>
  );
}

export default App;
