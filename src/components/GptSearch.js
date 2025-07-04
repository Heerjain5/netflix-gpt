import { BG_URL } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch=()=>{
    return(
        <div>
               <div className="fix top-0 left-0 w-full h-full -z-10">
        <img
          src={BG_URL}
          alt="Netflix Background"
          className="w-full h-full object-cover"
        />
      </div>
    <GptSearchBar/>
    <GptMovieSuggestion/>
        </div>
    );

};
export default GptSearch;

