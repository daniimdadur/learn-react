import {useState} from "react";
import * as React from "react";

export default function Snapshot(): React.ReactElement {
    const [count, setCount] = useState<number>(0);

    console.log("render:", count);

    function handleClick(): void {
        console.log("before:", count);

        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);

        console.log("after:", count);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>click</button>
        </div>
    )
}