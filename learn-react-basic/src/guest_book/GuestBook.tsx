import {type ChangeEvent, type ReactElement, useRef, useState} from "react";
import GuestBookForm from "./GuestBookForm.tsx";

export default function GuestBook(): ReactElement {
    const [name, setName] = useState<string>("");
    const [message, setMessage] = useState<string>();

    const nameInput = useRef<HTMLInputElement>(null)

    function handleSubmit(e): void {
        e.preventDefault();
        setName("");
        setMessage("");

        if (nameInput.current) {
            nameInput.current.focus();
        }

        alert(`Name: ${name}, Message: ${message}`);
    }

    return (
        <>
            <h2>Guest Book</h2>
            <form>
                <GuestBookForm ref={nameInput} name={name} setName={setName}/>
                <label htmlFor="message">Message</label><br/>
                <textarea name="message" value={message}
                          onChange={(e: ChangeEvent<HTMLTextAreaElement>): void => setMessage(e.target.value)}></textarea><br/>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}