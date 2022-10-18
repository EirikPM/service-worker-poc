import localforage from 'localforage';
import { RootState } from './store';
import { IObservasjon } from '../features/observasjoner/todoSlice';

export const loadStates = () => {
    try {
        localforage.getItem('observasjoner').then((o) => {
            if (o === null) {
                console.log('fant ikke')
            }
            console.log(o)
            return o
        })
    } catch (error) {

    }
}


export const loadState = async () => {
    try {
        const observasjoner = await localforage.getItem<IObservasjon[]>('observasjoner')
        console.log(observasjoner)
        if (observasjoner === null) {
            return undefined
        }
        return {
            kvittering:
                { observasjoner }
        }

    } catch (error) {
        console.log(error)
        return undefined
    }
}


export const saveObservasjon = (state: RootState) => {
    try {
        console.log('saving to localforage')
        localforage.setItem('observasjoner', state.kvittering.observasjoner)
    } catch (error) {
        console.log('error while saving to localforage')
    }
}
