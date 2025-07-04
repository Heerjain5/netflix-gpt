import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const Secondcontainor = ()=>{
    const movies = useSelector(store => store.movies);
    return(
        movies.nowPlayingMovies&&( 
        <div className=" bg-black">
            <div className="mt-0   md:-mt-52 pl-4 md:pl-12 relative z-20">
 <MovieList tittle ={"Now Playing"} movies ={movies.nowPlayingMovies}/>
 <MovieList tittle ={"Trending"} movies ={movies.TrendingMovie}/>
 <MovieList tittle ={"Popular"} movies ={movies.PopularMovie}/>
 <MovieList tittle ={"Upcoming Movie"} movies ={movies.UpcomingMovie}/>
 
 </div>
    </div>)
    );
    
};
 export default Secondcontainor;