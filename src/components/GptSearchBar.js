import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import openai from "../utils/openai";
import { API } from "../utils/constants";
import { addGptMovieReview } from "../utils/GPTSlice";

const GptSearchBar=()=>{
const searchText = useRef(null);
const langkey = useSelector(store=>store.config.lang);
const dispatch = useDispatch();
// tmbd for movie search
 const searchMovieTmbd = async(movie) =>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='
        +movie+
        '&include_adult=false&language=en-US&page=1', 
        API);

        const json = await data.json();

 };






const handleGptSearchClick = async() =>{
    console.log(searchText.current.value);
    // make an api call to gpt api and get movies result 

const getQuery = "Act as a Movie Recommendation system and suggested some movie for the Query: "
+searchText.current.value+
"only give me names of 5 Movies , comma saperated like the example given ahead. example result: sholey,vivah,golmal, koi mil gya , gaddar ";


    const gptResults = await openai.chat.completions.create({
  model: 'gpt-3.5-turbo',
  messages: [
    
    { role: 'user', content: getQuery },
  ],
    });
    
console.log(gptResults.choices?.[0]?.message?.content);
 const gptMovies =gptResults.choices?.[0]?.message?.content.split(",");



// search for each movie in tmbd 

const promiseArray = gptMovies.map((movie)=>searchMovieTmbd(movie));


const tmbdResult = await Promise.all(promiseArray);

dispatch(addGptMovieReview({movieNames:gptMovies , movieResult:tmbdResult}));




};
// search for each movie


    return(
        <div className=" pt-[35%] md:pt-[10%] flex justify-center ">
     <form className="w-full md:w-1/2 bg-black grid grid-cols-12"
     onSubmit={(e)=>e.preventDefault()}>
        <input 
        ref={searchText}
        type="text" 
        className="p-4 m-4 col-span-9" 
        placeholder={lang[langkey].gptSearchPlaceholder}/>
        <button className=" col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg"
       onClick={handleGptSearchClick}
        >
            {lang[langkey].search}
            </button>

     </form>
        </div>
    );

};
export default GptSearchBar;