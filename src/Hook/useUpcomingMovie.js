import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../utils/constants";
import {  addUpcomingMovie  } from "../utils/MovieSlice";

const useUpcomingMovie = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const UpcomingMovie = useSelector(
    (store) => store.movies.UpcomingMovie
  );

  const getUpcomingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API
    );
    const json = await data.json();
    dispatch( addUpcomingMovie (json.results));
  };

  useEffect(() => {
     getUpcomingMovie();
  }, []);
};

export default useUpcomingMovie;