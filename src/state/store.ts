import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer   //now we have connected our counterSlice our store and is now accessible through provider to the entire app
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch