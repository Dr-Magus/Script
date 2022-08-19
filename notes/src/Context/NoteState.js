import { useState } from "react";
import NoteContext from "./NoteContext";

export default function NoteState (props) {

    const [state, setState] = useState({
        course: "-- select --",
        subject: "-- select --"
    });

    const update = (par, arg) => {
        setState(previousData => {
            return {
                ...previousData,
                [par]: arg
            }
        })
    }

    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}