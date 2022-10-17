import React from 'react'
import {useSelector, shallowEqual, useDispatch} from 'react-redux'
import {RootState} from "../../app/store";
import {observasjonEdited} from "./todoSlice";

interface observasjon {
    id: number,
    tittel: string,
    tekst: string
}

const ObservasjonList = () => {
    const dispatch = useDispatch()
    const observasjoner = useSelector((state: RootState) => state.kvittering.observasjoner)

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
