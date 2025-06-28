
import Header from "./Header";
import useNowPlayingMovies from "../Hook/useNowPlayingMovies.js";
import Maincontainor from "./Maincontainor.js";
import Secondcontainor from "./Secondcontainor.js";


const Browse=()=>{
  useNowPlayingMovies();

    return (
      <div>
        <Header/>
        <Maincontainor/>
        <Secondcontainor/>
      </div>
    );
};
export default Browse;