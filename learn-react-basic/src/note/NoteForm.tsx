import {type ChangeEvent, type ReactElement, useState} from "react";

interface NoteFormProps {
    onAddNote: (text: string) => void;
}

export default function NoteForm({onAddNote}: NoteFormProps): ReactElement {
    console.log("render NoteForm");
    const [text, setText] = useState("");

    function handleChange(e: ChangeEvent<HTMLInputElement>): void {
        setText(e.target.value);
    }

    function handleClick(): void {
        console.log(text);
        setText("");
        onAddNote(text);
        console.log(text);
    }

    return (
        <>
            <input placeholder="Add Note" value={text} onChange={handleChange}/>
            <button onClick={handleClick}>Add</button>
        </>
    )
}