import Note, {type NoteObject} from "./Note.tsx";
import * as React from "react";
import {NotesContext} from "./NoteContext.tsx";
import {type RefObject, useMemo, useRef, useState} from "react";

export default function NoteList() : React.ReactElement {
    const notes: NoteObject[] | null = React.useContext(NotesContext);
    const [search, setSearch] = useState<string>("");
    const searchInput: RefObject<HTMLInputElement | null> = useRef<HTMLInputElement>(null);

    const filteredNotes: NoteObject[] | undefined = useMemo((): NoteObject[] | undefined => {
        console.info("filtering notes");
        return notes?.filter(note => note.text.includes(search))
    }, [notes, search]);

    function handleSearch(): void {
        if (searchInput.current) {
            console.info("handleSearch");
            setSearch(searchInput.current.value);
        }
    }

    if (!filteredNotes) {
        return <p>No notes available.</p>;
    }
    return (
        <div>
            <input ref={searchInput} placeholder="Search"/>
            <button onClick={handleSearch}>Search</button>
            <ul>
                {filteredNotes.map((note: NoteObject): React.ReactElement => (
                    <li key={note.id}>
                        <Note note={note}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}