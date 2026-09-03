import {createRoot} from "react-dom/client";
import Timer from "./Timer.tsx";

createRoot(document.getElementById("root")!)
    .render(
        <>
            <Timer />
        </>
    )