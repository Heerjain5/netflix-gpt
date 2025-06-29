import MovieCard from "./MovieCard";

const MovieList=({tittle, movies}) =>{
    console.log(movies);
    return(
<div className="px-5 ">
      <h1 className="text-3xl text-white py-4">{tittle}</h1>
    <div className="flex overflow-x-scroll  ">
        
        <div className="flex ">
             {movies?.map((movie)=> 
             (<MovieCard key={movie.id} posterPath={movie.poster_path}/>

             ))}
       
        </div>
    </div>
  
</div>
    );
};
export default MovieList;