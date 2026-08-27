import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import ContactForm from "./ContactForm.tsx";

createRoot(document.getElementById("root")!)
.render(
    <StrictMode>
        <ContactForm/>
    </StrictMode>
)