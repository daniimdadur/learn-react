import {useState} from "react";
import * as React from "react";

interface CounterProps {
    name?: string
}

export default function Counter({name}: CounterProps): React.ReactElement {
    const [count, setCount] = useState(0);

    function handleClick(): void {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>
                Counter {name} : {count}
            </h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}