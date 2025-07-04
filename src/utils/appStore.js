import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import MoviesReducer from "./MovieSlice";
import GPTReducer from"./GPTSlice";
import configReducer from "./ConfigSlice";
const appStore = configureStore({
    reducer:{ 
         user : userReducer,
         movies: MoviesReducer,
         gpt:GPTReducer,
         config:configReducer,
    },
}
);
export default appStore;