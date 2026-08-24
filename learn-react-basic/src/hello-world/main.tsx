import {createRoot} from "react-dom/client";
import HelloWorld from "./HelloWorld.tsx";
import {StrictMode} from "react";
import Container from "./Container.tsx";
import TodoList from "../todolist/TodoList.tsx";
import MyButton from "../button/MyButton.tsx";

createRoot(document.getElementById("root")!)
    .render(
        <StrictMode>
            <Container>
                <HelloWorld/>
                <TodoList/>
                <MyButton text="Smash me" onSmash={() => alert("You smash me")}/>
            </Container>
        </StrictMode>
    )