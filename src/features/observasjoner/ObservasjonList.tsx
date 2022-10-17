import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { observasjonEdited } from "./todoSlice";
import { useAppDispatch, useAppSelector } from '../../app/hooks'


interface observasjon {
    id: number,
    tittel: string,
    tekst: string
}

const ObservasjonList = () => {
    const observasjoner = useAppSelector(state => state.kvittering.observasjoner)
    const dispatch = useAppDispatch()

    return (
        <div>
            {observasjoner.map((obs, key) => (
                <div key={key}>
                    <label htmlFor={obs.id + ''}>Obs: {obs.id}</label>
                    <input id={obs.id + ''} value={obs.text} onChange={(e) => dispatch(observasjonEdited({ ...obs, text: e.target.value }))} />
                </div>
            ))}
        </div>
    )
}

export default ObservasjonList
