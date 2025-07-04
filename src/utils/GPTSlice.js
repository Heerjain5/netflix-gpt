import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const GPTSlice = createSlice({
    name:'gpt',
    initialState :{
        showGptSearch:false,
        movieNames:null,
          movieResult:null,
    },
    reducers:{
        toggleGptSearchView :(state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieReview:(state, action)=>{
           const{ movieNames , movieResult} = action.payload;
       state.movieNames=movieNames;
       state.movieResult=movieResult;

    
        },
},
});
  export const {toggleGptSearchView, addGptMovieReview} = GPTSlice.actions;
export default GPTSlice.reducer;
