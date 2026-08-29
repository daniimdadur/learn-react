import type {NoteObject} from "./Note.tsx";
import {useImmer} from "use-immer";
import NoteForm from "./NoteForm.tsx";
import NoteList from "./NoteList.tsx";

let customId: number = 0;

const initialNotes: NoteObject[] = [
    {id: customId++, text: "Learn React", done: false},
    {id: 2, text: "Learn TypeScript", done: false},
    {id: 3, text: "Learn Redux", done: false},
    {id: 4, text: "Learn Next.js", done: false}
]

export default function NoteApp() {
    const [notes, setNotes] = useImmer(initialNotes);

    return (
        <div>
            <h1>Note App</h1>
            <NoteForm onAddNote={}/>
            <NoteList notes={} onChange={} onDelete={}/>
        </div>
    )
}