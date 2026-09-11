import {useDispatch, useSelector} from "react-redux";
import type {ReactElement} from "react";
import type {RootState} from "./store.ts";
import {decrement, increment} from "./counterSlice.ts";

export default function Counter(): ReactElement {
    const counter: number = useSelector((state: RootState): number => state.counter);
    const dispatch = useDispatch();

    function handleIncrement(): void {
        dispatch(increment());
    }

    function handleDecrement(): void {
        dispatch(decrement());
    }

    return (
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={handleIncrement}>increment</button>
            <button onClick={() => dispatch(increment(2))}>increment + 2</button>
            <button onClick={handleDecrement}>decrement</button>
            <button onClick={() => dispatch(decrement(2))}>increment - 2</button>
        </div>
    )
}