interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export { }

    //const initialState = {
//    todos: [
//        { id: 0, text: 'Learn React', completed: true },
//        { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
//        { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
//    ],
//    filters: {
//        status: 'All',
//        colors: []
//    }
//}
//
//
//function nextTodoId(todos: Todo[]) {
//    const maxId: number = todos.reduce((maxId: number, todo: Todo) => Math.max(todo.id, maxId), -1)
//    return maxId + 1
//}
//
//export default function todoReducer(state = initialState, action) {
//    switch (action.type) {
//        case 'todos/todoAdded': {
//            return {
//                ...state,
//                todos: [
//                    ...state.todos,
//                    {
//                        id: nextTodoId(state.todos),
//                        text: action.payload,
//                        completed: false
//                    }
//                ]
//            }
//        }
//        case 'todos/todoToggled': {
//            return {
//                ...state,
//                todos: state.todos.map((todo: Todo) => {
//                    if (todo.id !== action.payload) {
//                        return todo
//                    }
//
//                    return {
//                        ...todo,
//                        completed: !todo.completed
//                    }
//                })
//            }
//        }
//        default:
//            return state
//    }
//}
