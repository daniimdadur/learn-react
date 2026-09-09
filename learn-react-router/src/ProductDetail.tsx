import type {ReactElement} from "react";
import {type Params, useParams} from "react-router";

function ProductDetail(): ReactElement {
    const params: Readonly<Params> = useParams<string>();
    return (
        <div>
            <h1>ProductDetail {params.id}</h1>
            <p>Welcome to the ProductDetail page!</p>
        </div>
    )
}

export default ProductDetail;