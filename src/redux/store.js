import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./books/bookSlice";
import categorieSlice from "./categories/categorieSlice";

const store = configureStore({
    reducer:{
        books:bookSlice,
        categories:categorieSlice,
    }
})

export default store