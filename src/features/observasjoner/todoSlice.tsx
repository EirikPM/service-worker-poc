import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface ObservasjonState {
    id: number,
    tittel: string,
    beskrivelse: string
}


const initialState: Observasjon = {}

//const todosSlice = createSlice({
//    name: 'todos',
//    initialState,
//    reducers: {
//        todoAdded(state, action: PayloadAction<string>) {
//            state.entities.push(action.payload)
//        },
//        todoToggled(state, action) {
//            const todo = state.entities.find(todo => todo.id === action.payload)
//            todo.completed = !todo.completed
//        },
//        todosLoading(state, action) {
//            return {
//                ...state,
//                status: 'loading'
//            }
//        }
//    }
//})


//export const { todoAdded, todoToggled, todosLoading } = todosSlice.actions

//export default todosSlice.reducer 
