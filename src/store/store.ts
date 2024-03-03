import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./language.slice";
import catalogReducer from './catalog.slice';
import { postAPI } from "../servises/postServise";

export const store = configureStore({
    reducer: {
        [postAPI.reducerPath]: postAPI.reducer,
        languageReducer, 
        // catalogReducer,
    },
    middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(postAPI.middleware),
	devTools: process.env.NODE_ENV !== 'production'
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;