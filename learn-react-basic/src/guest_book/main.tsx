import {createRoot} from "react-dom/client";
import GuestBook from "./GuestBook.tsx";

createRoot(document.getElementById("root")!)
    .render(
        <>
            <GuestBook />
        </>
    )