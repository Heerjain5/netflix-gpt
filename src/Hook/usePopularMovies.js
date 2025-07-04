import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../utils/constants";
import {  addPopularMovie  } from "../utils/MovieSlice";

const usePopularMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const PopularMovie = useSelector(
    (store) => store.movies.PopularMovie
  );

  const getPopularMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API
    );
    const json = await data.json();
    dispatch( addPopularMovie (json.results));
  };

  useEffect(() => {
    !PopularMovie && getPopularMovie ();
  }, []);
};

export default usePopularMovies;