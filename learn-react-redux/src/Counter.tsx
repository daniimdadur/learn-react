import {useDispatch, useSelector} from "react-redux";
import type {ReactElement} from "react";
import type {AppDispatch, RootState} from "./store.ts";
import {decrement, getCounter, getDoubleCounter, increment} from "./counterSlice.ts";

export default function Counter(): ReactElement {
    const counter = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch<AppDispatch>();

    function handleIncrement(): void {
        dispatch(increment());
    }

    function handleDecrement(): void {
        dispatch(decrement());
    }

    const doubleCounter: number = useSelector(getDoubleCounter);
    const tripleCounter: number = useSelector((state: RootState) => getCounter(state, 3));

    return (
        <div>
            <h1>Counter : {counter}</h1>
            <h1>Double Counter : {doubleCounter}</h1>
            <h1>Triple Counter : {tripleCounter}</h1>
            <button onClick={handleIncrement}>increment</button>
            <button onClick={() => dispatch(increment(2))}>increment + 2</button>
            <button onClick={handleDecrement}>decrement</button>
            <button onClick={() => dispatch(decrement(2))}>increment - 2</button>
        </div>
    )
}