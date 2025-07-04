import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptMovieSuggestion=()=>{
const  { movieNames , movieResult} = useSelector(store=> store.gpt);
if(!movieNames) return null;






    return(
        <div className="p-4 m-4 bg-black text-white bg-opacity-90">
           
            <div>
        {movieNames.map((movieName, index) =>
         (       
        <MovieList
         key={movieName} 
         tittle={movieName}
         movies={movieResult[index]}
         />
         ))}
            
            </div>
      
        </div>
    );

}; 
export default GptMovieSuggestion;