import * as React from "react";
import {NotesDispatchContext} from "./NoteContext.tsx";
import type {Dispatch} from "react";
import type {ActionReducer} from "./NoteApp.tsx";

export interface NoteObject {
    id: number
    text: string;
    done: boolean;
}

interface NoteComponentProps {
    note: NoteObject;
}

export default function Note({note}: NoteComponentProps): React.ReactElement {
    const dispatch: Dispatch<ActionReducer> | null = React.useContext(NotesDispatchContext);
    const [isEditing, setIsEditing] = React.useState(false);

    let component;

    function handleChangeText(e: React.ChangeEvent<HTMLInputElement>): void {
        if (dispatch) {
            dispatch({
                type: 'CHANGE_NOTE',
                id: note.id,
                text: e.target.value,
                done: note.done
            });
        }
    }

    if (isEditing) {
        component = (
            <>
                <input value={note.text} onChange={handleChangeText}/>
                <button onClick={(): void => setIsEditing(false)}>Save</button>
            </>
        )
    } else {
        component = (
            <>
                {note.text}
                <button onClick={(): void => setIsEditing(true)}>Edit</button>
            </>
        )
    }

    function handleChangeDone(e: React.ChangeEvent<HTMLInputElement>): void {
        if (dispatch) {
            dispatch({
                type: 'CHANGE_NOTE',
                id: note.id,
                text: note.text,
                done: e.target.checked
            });
        }
    }

    function handleDelete(): void {
        if (dispatch) {
            dispatch({
                type: 'DELETE_NOTE',
                id: note.id
            });
        }
    }

    return (
        <label>
            <input type="checkbox" checked={note.done} onChange={handleChangeDone}/>
            {component}
            <button onClick={handleDelete}>Delete</button>
        </label>
    )
}