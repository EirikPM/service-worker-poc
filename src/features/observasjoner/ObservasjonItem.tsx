import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


//const selectTodoById = (state, todoId) => {
//    return state.todos.find((todo) => todo.id === todoId)
//}

const ObservasjonItem = ({ observasjon }) => {

    const completed = (e) => {

    }


    return (
        <li>
            <div className="view">
                <div className="segment label">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={completed}
                        onChange={handleCompletedChanged}
                    />
                    <div className="todo-text">{text}</div>
                </div>
                <div className="segment buttons">
                    <select
                        className="colorPicker"
                        value={color}
                        style={{ color }}
                        onChange={handleColorChanged}
                    >
                        <option value=""></option>
                        {colorOptions}
                    </select>
                    <button className="destroy" onClick={onDelete}>
                    </button>
                </div>
            </div>
        </li>
    )
}

export default ObservasjonItem
