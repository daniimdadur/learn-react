import Note, {type NoteObject} from "./Note.tsx";
import * as React from "react";

interface NoteListProps {
    notes: NoteObject[];
    onChange: (note: NoteObject) => void;
    onDelete: (note: NoteObject) => void;
}

export default function NoteList({notes, onChange, onDelete}: NoteListProps) : React.ReactElement {
    return (
        <ul>
            {notes.map((note: NoteObject): React.ReactElement => (
                <li key={note.id}>
                    <Note note={note} onChange={onChange} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    )
}