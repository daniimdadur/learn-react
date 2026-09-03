import Note, {type NoteObject} from "./Note.tsx";
import * as React from "react";
import {NotesContext} from "./NoteContext.tsx";

export default function NoteList() : React.ReactElement {
    const notes: NoteObject[] | null = React.useContext(NotesContext);
    if (!notes) {
        return <p>No notes available.</p>;
    }
    return (
        <ul>
            {notes.map((note: NoteObject): React.ReactElement => (
                <li key={note.id}>
                    <Note note={note}/>
                </li>
            ))}
        </ul>
    )
}