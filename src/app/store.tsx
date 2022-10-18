import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { default as kvittering } from "../features/observasjoner/todoSlice";
import localforage from 'localforage'
import { loadState, saveObservasjon } from './localForage'

const reducer = {
    kvittering
}


let preloadedState = await loadState()


const store = configureStore({
    reducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

store.subscribe(() => {
    saveObservasjon(store.getState())
})
