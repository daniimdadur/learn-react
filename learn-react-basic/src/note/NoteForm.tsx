import {type ChangeEvent, type Dispatch, type ReactElement, useState} from "react";
import * as React from "react";
import {NotesDispatchContext} from "./NoteContext.tsx";
import type {ActionReducer} from "./NoteApp.tsx";

let id: number = 6;
function customId(): number {
    return id++;
}

export default function NoteForm(): ReactElement {
    console.log("render NoteForm");
    const [text, setText] = useState("");
    const dispatch: Dispatch<ActionReducer> | null = React.useContext(NotesDispatchContext);

    function handleChange(e: ChangeEvent<HTMLInputElement>): void {
        setText(e.target.value);
    }

    function handleClick(): void {
        console.log(text);
        setText("");
        if (dispatch) {
            dispatch({
                type: 'ADD_NOTE',
                id: customId(),
                text: text
            });
        }
        console.log(text);
    }

    return (
        <>
            <input placeholder="Add Note" value={text} onChange={handleChange}/>
            <button onClick={handleClick}>Add</button>
        </>
    )
}