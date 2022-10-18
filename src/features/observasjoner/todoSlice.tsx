import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface IKvittering {
    observasjoner: IObservasjon[]
}

export interface IObservasjon {
    id: number,
    text: string
}


const initialState: IKvittering = {
    observasjoner: [
        { id: 1, text: '' },
        { id: 2, text: '' },
        { id: 3, text: '' },
    ]
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        observasjonAdded(state, action: PayloadAction<IObservasjon>) {
            state.observasjoner = [...state.observasjoner, action.payload]
        },
        observasjonEdited(state, action: PayloadAction<IObservasjon>) {
            const obs = state.observasjoner.find(o => o.id == action.payload.id)
            if (obs) {
                obs.text = action.payload.text
            }
        }
    }
})


export const { observasjonAdded, observasjonEdited } = todosSlice.actions

export default todosSlice.reducer
