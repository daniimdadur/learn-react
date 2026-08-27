import {useImmer} from "use-immer";
import TaskForm from "./TaskForm.tsx";
import TaskList from "./TaskList.tsx";
import * as React from "react";

export default function Task(): React.ReactElement {
    const [items, setItems] = useImmer<string[]>([]);

    return (
        <div>
            <TaskForm setItems={setItems}/>
            <TaskList items={items}/>
        </div>
    )
}