import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { default as kvittering } from "../features/observasjoner/todoSlice";


const reducer = {
    kvittering
}


const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
