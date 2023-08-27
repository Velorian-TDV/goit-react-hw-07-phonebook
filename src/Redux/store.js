import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reduser";

export const store = configureStore({
    reducer: rootReducer,
});