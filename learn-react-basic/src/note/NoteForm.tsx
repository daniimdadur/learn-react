import {type ChangeEvent, type ReactElement, useState} from "react";

interface NoteFormProps {
    onAddNote: (text: string) => void;
}

export default function NoteForm({onAddNote}: NoteFormProps): ReactElement {
    const [text, setText] = useState("");

    function handleChange(e: ChangeEvent<HTMLInputElement>): void {
        setText(e.target.value);
    }

    function handleClick(): void {
        setText("");
        onAddNote(text);
    }

    return (
        <>
            <input placeholder="Add Note" value={text} onChange={handleChange}/>
            <button onClick={handleClick}>Add</button>
        </>
    )
}