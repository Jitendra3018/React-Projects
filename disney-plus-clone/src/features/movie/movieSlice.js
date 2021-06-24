//To know more about what is happening here, then go to the info.txt file in this disney-plus-clone directory

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    movies: []
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state, action) => {     // Here we will pass the data of al the movies that we are getting from the database
            state.movies = action.payload;
        }
    }
});

export const { setMovies } = movieSlice.actions;
export const selectMovies = (state) => state.movie.movies;      // This is getting us the movies state
export default movieSlice.reducer;      //This tells the store.js that here is the reducer for which it is looking for.