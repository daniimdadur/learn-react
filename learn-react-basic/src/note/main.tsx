import {createRoot} from "react-dom/client";
import NoteApp from "./NoteApp.tsx";

createRoot(document.getElementById("root")!)
    .render(
        <NoteApp/>
    )