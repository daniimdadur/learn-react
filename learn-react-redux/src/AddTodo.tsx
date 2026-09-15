import {type ReactElement, useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {addTodo} from "./todoListSlice.ts";

export default function AddTodo(): ReactElement {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleClick(): void {
        dispatch(addTodo({name}));
        navigate("/todo-list");
    }

    return (
        <div>
            <h1>Add Todo</h1>
            <input type="text" placeholder="Enter todo name" value={name}
                   onChange={(e): void => setName(e.target.value)}/>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}