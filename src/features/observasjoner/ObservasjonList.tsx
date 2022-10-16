import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import ObservasjonItem from './ObservasjonItem'

//const selectTodoIds = (state) => state.todos.map((todo) => todo.id)
//
interface observasjon {
    id: number,
    tittel: string,
    tekst: string
}

const ObservasjonList = () => {
    const observasjoner: observasjon[] = []

    const renderedObservasjonItems = observasjoner.map((observasjon) => {
        return <ObservasjonItem key={observasjon.id} observasjon={observasjon} />
    })

    //    const renderedListItems = todoIds.map((todoId) => {
    //        return <ObservasjonItem key={todoId} id={todoId} />
    //    })
    //
    return <ul className="observasjon-list">{renderedObservasjonItems}</ul>
}

export default ObservasjonList
