import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API } from "../utils/constants";
import { addTrailerVideo } from "../utils/MovieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    const getMovieVideos = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
          API
        );
        const json = await response.json();
        console.log("Trailer data:", json);

        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[1] : json.results[1];
        dispatch(addTrailerVideo(trailer));
        console.log(filterData);
      } catch (error) {
        console.error("Failed to fetch trailer videos:", error);
      }
    };

    getMovieVideos();
  }, [movieId, dispatch]);
};

export default useMovieTrailer;
