
import Header from "./Header";
import useNowPlayingMovies from "../Hook/useNowPlayingMovies.js";
import Maincontainor from "./Maincontainor.js";
import Secondcontainor from "./Secondcontainor.js";
import usePopularMovies from "../Hook/usePopularMovies.js";
import useUpcomingMovie from "../Hook/useUpcomingMovie.js";
import useTrendingMovie from "../Hook/useTrendingMovie.js";
import GptSearch from "./GptSearch.js";

import { useSelector } from "react-redux";


const Browse=()=>{
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovie();
  useTrendingMovie();

    return (
      <div>
        <Header/>
        {
          showGptSearch?
          (<GptSearch/>)
          : (<><Maincontainor/>
        <Secondcontainor/></>
       ) }
        
      </div>
    );
};
export default Browse;