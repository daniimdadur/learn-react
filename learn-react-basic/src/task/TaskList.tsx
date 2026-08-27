import * as React from "react";

interface TaskListProps {
    items?: string[];
}

export default function TaskList({items = []}: TaskListProps): React.ReactElement {
    return (
        <div>
            <h1>List Task</h1>
            <ul>
                {items.map((item: string, index: number): React.ReactElement =>
                    <li key={index}>{item}</li>
                )}
            </ul>
        </div>
    )
}