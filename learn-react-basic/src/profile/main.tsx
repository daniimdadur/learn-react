import {createRoot} from "react-dom/client";
import ProfileApp from "./ProfileApp.tsx";

createRoot(document.getElementById("root")!)
    .render(
        <ProfileApp/>
    )