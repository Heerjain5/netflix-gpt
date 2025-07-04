import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { API } from "../utils/constants";
import { addTrailerVideo } from "../utils/MovieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
    const TrailerVideo = useSelector(
    (store) => store.movies.TrailerVideo
  );
  
 

    const getMovieVideos = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
          API
        );
        const json = await response.json();
       

        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[1] : json.results[1];
        dispatch(addTrailerVideo(trailer));
       
      } catch (error) {
       
      }
    };

 useEffect(() => {
   !TrailerVideo&& getMovieVideos();
  }, []);
};


export default useMovieTrailer;
