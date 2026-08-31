import type {NoteObject} from "./Note.tsx";
import NoteForm from "./NoteForm.tsx";
import NoteList from "./NoteList.tsx";
import * as React from "react";
import {useImmerReducer} from "use-immer";

type ActionReducer =
    | { type: "ADD_NOTE"; id: number; text: string }
    | { type: "CHANGE_NOTE"; id: number; text: string; done: boolean }
    | { type: "DELETE_NOTE"; id: number };

let id: number = 0;
function customId(): number {
    return id++;
}

const initialNotes: NoteObject[] = [
    {id: customId(), text: "Learn React", done: false},
    {id: customId(), text: "Learn TypeScript", done: false},
    {id: customId(), text: "Learn Redux", done: false},
    {id: customId(), text: "Learn Docker", done: true},
    {id: customId(), text: "Learn Next.js", done: false}
]

function notesReducer(notes: NoteObject[], action: ActionReducer): void {
    if (action.type === "ADD_NOTE") {
        notes.push({
            id: action.id,
            text: action.text,
            done: false
        })
    } else if (action.type === "CHANGE_NOTE") {
        const index: number = notes.findIndex((note: NoteObject): boolean => note.id === action.id);
        notes[index].text = action.text;
        notes[index].done = action.done;
    } else if (action.type === "DELETE_NOTE") {
        const index: number = notes.findIndex((note: NoteObject): boolean => note.id === action.id);
        notes.splice(index, 1);
    }
}

export default function NoteApp(): React.ReactElement {
    console.log("render NoteApp");
    const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

    function handleAddNote(text: string): void {
        dispatch({
            type: "ADD_NOTE",
            id: customId(),
            text: text
        });
    }

    function handleChangeNote(note: NoteObject): void {
        dispatch({
            type: 'CHANGE_NOTE',
            ...note
        });
    }

    function handleDeleteNote(note: NoteObject): void {
        dispatch({
            type: "DELETE_NOTE",
            id: note.id
        });
    }

    return (
        <div>
            <h1>Note App</h1>
            <NoteForm onAddNote={handleAddNote}/>
            <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote}/>
        </div>
    )
}