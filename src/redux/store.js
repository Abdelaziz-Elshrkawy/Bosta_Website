import { configureStore } from "@reduxjs/toolkit";
import { viewReducer } from "./reducer";



export const viewStore = configureStore({
    reducer: viewReducer
})