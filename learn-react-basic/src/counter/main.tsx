import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import CounterApp from "./CounterApp.tsx";

createRoot(document.getElementById("root")!)
    .render(
        <StrictMode>
            <CounterApp/>
        </StrictMode>
    )