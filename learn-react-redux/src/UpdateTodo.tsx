import {type ReactElement, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {getTodo, updateTodo} from "./todoListSlice.ts";
import type {RootState} from "./store.ts";

export default function UpdateTodo(): ReactElement {
    const params = useParams();
    const todo = useSelector((state: RootState) => getTodo(state, Number(params.id)));
    const [name, setName] = useState(todo?.name ?? "");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleClick(): void {
        if (!todo) return;
        dispatch(updateTodo({id: todo.id, name: name}));
        navigate("/todo-list");
    }

    return (
        <div>
            <h1>Update Todo</h1>
            <input type="text" placeholder="Enter todo name" value={name}
                   onChange={(e): void => setName(e.target.value)}/>
            <button onClick={handleClick}>Update</button>
        </div>
    )
}