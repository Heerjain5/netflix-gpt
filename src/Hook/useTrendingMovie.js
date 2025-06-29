import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../utils/constants";
import {  addTrendingMovie  } from "../utils/MovieSlice";

const useTrendingMovie = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const TrendingMovie = useSelector(
    (store) => store.movies.TrendingMovie
  );

  const getTrendingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API
    );
    const json = await data.json();
    dispatch( addTrendingMovie (json.results));
  };

  useEffect(() => {
     getTrendingMovie();
  }, []);
};

export default useTrendingMovie;