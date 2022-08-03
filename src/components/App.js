// ---------- IMPORTS ----------

// Dependencies
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { matchPath, useLocation } from "react-router";

// Styles
import "../styles/App.scss";

// Services
import getApiData from "../services/wowApi";
import ls from "../services/localStorage";

// Components
import Header from "./Header";
import Filters from "./Filters";
import MovieSceneList from "./MovieSceneList";
import MovieSceneDetail from "./MovieSceneDetail";
import Footer from "./Footer";
import NotFoundPage from "./NotFoundPage";

function App() {
  // ---------- STATE VARIABLES ----------
  const [movieScenes, setMovieScenes] = useState(ls.get("lsMovieScenes", []));
  const [filterYear, setFilterYear] = useState(0);
  const [filterMovie, setFilterMovie] = useState("");
  const [filterTotalWow, setFilterTotalWow] = useState(0);

  // ---------- HOOK TO GET API DATA ----------
  useEffect(() => {
    if (movieScenes.length === 0) {
      getApiData().then((apiData) => {
        setMovieScenes(apiData);
      });
    }
  }, []);

  // ---------- HOOK FOR LOCAL STORAGE ----------
  // Save data in local storage with useEffect so that local storage stays updated after changing
  // Read local storage data and save it in useState so that they are available upon opening the page
  useEffect(() => {
    ls.set("lsMovieScenes", movieScenes);
  }, [movieScenes, filterMovie]);

  // ---------- FUNCTION --> HANDLE MOVIE FILTER ----------
  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };

  // ---------- FUNCTION --> HANDLE YEAR FILTER ----------
  const handleFilterYear = (value) => {
    setFilterYear(parseInt(value));
  };
  // The value needs to be parsed to match the type of value given by the API (number)

  // ---------- FUNCTION --> HANDLE TOTAL WOW FILTER ----------
  const handleFilterTotalWow = (value) => {
    setFilterTotalWow(parseInt(value));
  };

  // ----- CONSANT SAVING THE FILTERED SCENE LIST  -----
  const movieSceneFilters = movieScenes

    // ---------- METHOD --> FILTER BY MOVIE ----------
    .filter((movie) => {
      return movie.movie.toLowerCase().includes(filterMovie.toLowerCase());
    })

    // ---------- METHOD --> FILTER BY TOTAL WOW ----------
    .filter((movie) => {
      console.log(filterTotalWow, movie.wow);
      return filterTotalWow === 0
        ? true
        : movie.wow === parseInt(filterTotalWow);
    })

    // ---------- METHOD --> FILTER BY YEAR ----------
    .filter((movie) => {
      return filterYear === 0 ? true : movie.year === filterYear;
    });

  // ---------- FUNCTION TO NOT REPEAT YEARS ----------
  const getYear = () => {
    const movieYear = movieScenes.map((oneYear) => oneYear.year);

    const unrepeatedYear = movieYear.filter((movie, index) => {
      return movieYear.indexOf(movie) === index;
    });

    return unrepeatedYear;
  };

  // -------------------- ROUTES --------------------
  const { pathname } = useLocation();
  const dataPath = matchPath("/movie/:movieId", pathname);
  // console.log(dataPath);

  const movieId = dataPath !== null ? dataPath.params.movieId : null;
  const movieFound = movieScenes.find(
    (movie) => movie.id === parseInt(movieId)
  );
  // console.log(movieId);
  // console.log(movieFound);

  // -------------------- RETURN --------------------
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <div className='container'>
                <Header />
                <Filters
                  handleFilterMovie={handleFilterMovie}
                  filterMovie={filterMovie}
                  handleFilterTotalWow={handleFilterTotalWow}
                  filterTotalWow={filterTotalWow}
                  handleFilterYear={handleFilterYear}
                  year={getYear()}
                />
                <MovieSceneList movieScenes={movieSceneFilters} />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path='/movie/:movieId'
          element={
            <>
              <div className='container'>
                <Header />
                <MovieSceneDetail movie={movieFound} />
              </div>
              <Footer />
            </>
          }
        />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
