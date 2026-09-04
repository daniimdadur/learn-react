import {createRoot} from "react-dom/client";
import ProductList from "./ProductList.tsx";

createRoot(document.getElementById("root")!)
    .render(
        <>
            <ProductList/>
        </>
    )