import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo:null, 
  },
  reducers: {
    // Action to store now playing movies fetched from TMDB
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
       addPopularMovie: (state, action) => {
      state.PopularMovie = action.payload;
    },
      addTrendingMovie: (state, action) => {
      state.TrendingMovie = action.payload;
    },
      addUpcomingMovie: (state, action) => {
      state.UpcomingMovie = action.payload;
    },
      
    addTrailerVideo:(state,action) =>{
      state.trailerVideo = action.payload;
    },
  },
});

// Export the action creator
export const { addNowPlayingMovie , addTrailerVideo,addPopularMovie,addUpcomingMovie, addTrendingMovie} = movieSlice.actions;

// Export the reducer to be added to the store
export default movieSlice.reducer;
