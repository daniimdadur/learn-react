import {useState} from "react";
import * as React from "react";
import Counter from "./Counter.tsx";

export default function CounterApp(): React.ReactElement {
    const [show2, setShow2] = useState(true)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setShow2(e.target.checked);
    }

    return (
        <div>

            {show2 ? <Counter key="budi" name="Budi"/> : <Counter key="eko" name="Eko"/>}

            <input type="checkbox" checked={show2} onChange={handleChange}/> Tampilkan Counter 2
        </div>
    )
}