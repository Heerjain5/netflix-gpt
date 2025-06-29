
import Header from "./Header";
import useNowPlayingMovies from "../Hook/useNowPlayingMovies.js";
import Maincontainor from "./Maincontainor.js";
import Secondcontainor from "./Secondcontainor.js";
import usePopularMovies from "../Hook/usePopularMovies.js";
import useUpcomingMovie from "../Hook/useUpcomingMovie.js";
import useTrendingMovie from "../Hook/useTrendingMovie.js";


const Browse=()=>{
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovie();
  useTrendingMovie();

    return (
      <div>
        <Header/>
        <Maincontainor/>
        <Secondcontainor/>
      </div>
    );
};
export default Browse;