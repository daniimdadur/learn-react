import * as React from "react";
import {useState} from "react";

export interface NoteObject {
    id?: number | string;
    text: string;
    done: boolean;
}

interface NoteComponentProps {
    note: NoteObject;
    onChange: (note: NoteObject) => void;
    onDelete: (note: NoteObject) => void;
}

export default function Note({note, onChange, onDelete} : NoteComponentProps): React.ReactElement {
    const [isEditing, setIsEditing] = useState(false);

    let component;

    function handleChangeText(e: React.ChangeEvent<HTMLInputElement>): void {
        const newNote = {...note, text: e.target.value};
        onChange(newNote);
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
                <button onClick={(): void => setIsEditing(true)}>Save</button>
            </>
        )
    }

    function handleChangeDone(e: React.ChangeEvent<HTMLInputElement>): void {
        const newNote = {...note, done: e.target.checked};
        onChange(newNote);
    }

    return (
        <label>
            <input type="checkbox" checked={note.done} onChange={handleChangeDone}/>
            {component}
            <button onClick={(): void => onDelete(note)}>Delete</button>
        </label>
    )
}