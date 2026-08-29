import {createRoot} from "react-dom/client";
import Snapshot from "./Snapshot.tsx";

createRoot(document.getElementById("root")!)
    .render(
        <Snapshot/>
    )