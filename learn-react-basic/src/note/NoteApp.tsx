import type {NoteObject} from "./Note.tsx";
import NoteForm from "./NoteForm.tsx";
import NoteList from "./NoteList.tsx";
import * as React from "react";
import {useImmerReducer} from "use-immer";
import {NotesContext, NotesDispatchContext} from "./NoteContext.tsx";

export type ActionReducer =
    | { type: "ADD_NOTE"; id: number; text: string }
    | { type: "CHANGE_NOTE"; id: number; text: string; done: boolean }
    | { type: "DELETE_NOTE"; id: number };

const initialNotes: NoteObject[] = [
    {id: 1, text: "Learn React", done: false},
    {id: 2, text: "Learn TypeScript", done: false},
    {id: 3, text: "Learn Redux", done: false},
    {id: 4, text: "Learn Docker", done: true},
    {id: 5, text: "Learn Next.js", done: false}
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


    return (
        <div>
            <NotesContext.Provider value={notes}>
                <NotesDispatchContext value={dispatch}>
                    <h1>Note App</h1>
                    <NoteForm/>
                    <NoteList/>
                </NotesDispatchContext>
            </NotesContext.Provider>
        </div>
    )
}