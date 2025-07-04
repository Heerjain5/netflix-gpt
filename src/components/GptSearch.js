import { BG_URL } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch=()=>{
    return(
      <>
         <div className="fixed  w-full h-full -z-10">
        <img
          className="w-screen h-screen object-cover"
          src={BG_URL} 
          alt="bg-logo"
        
        />
      </div>
      <div >
    <GptSearchBar/>
    <GptMovieSuggestion/>
        </div>
      </>
       
    );

};
export default GptSearch;

