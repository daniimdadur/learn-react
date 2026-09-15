import type {ReactElement} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "./store.ts";
import {removeTodo, type Todo} from "./todoListSlice.ts";
import {Link} from "react-router";

export default function ListTodo(): ReactElement {
    const todos: Todo[] = useSelector((state: RootState): Todo[] => state.todoList);
    const dispatch = useDispatch();

    function handleDeleteTodo(id: number): void {
        dispatch(removeTodo({id: id}));
    }
    return (
        <div>
            <h1>List Todo</h1>
            <Link to="/todo-list/add">Add Todo</Link>

            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {todos.map((todo: Todo) => (
                    <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.name}</td>
                        <td>
                            <Link to={`/todo-list/${todo.id}/edit`}>Edit</Link>
                            <button onClick={(): void => handleDeleteTodo(todo.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}