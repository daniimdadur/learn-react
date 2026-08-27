import {useState} from "react";
import * as React from "react";
import type {Draft} from "immer";

interface TaskFormProps {
    setItems: (updater: (draft: Draft<string[]>) => void) => void;
}

export default function TaskForm({setItems}: TaskFormProps): React.ReactElement {
    const [item, setItem] = useState<string>("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setItem(e.target.value);
    }

    function handleClick(e: React.MouseEvent<HTMLButtonElement>): void {
        e.preventDefault();
        setItems((draft: string[]): void => {
            draft.push(item);
        })
        setItem("");
    }

    return (
        <div>
            <h1>Create Task</h1>
            <form>
                <input value={item} onChange={handleChange}/>
                <button onClick={handleClick}>Add</button>
            </form>
            <h3>{item}</h3>
        </div>
    )
}