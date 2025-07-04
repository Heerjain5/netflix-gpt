import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API,  } from "../utils/constants";
import {  addNowPlayingMovie  } from "../utils/MovieSlice";

const useNowPlayingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();


  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API
    );
    const json = await data.json();
    dispatch( addNowPlayingMovie (json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;