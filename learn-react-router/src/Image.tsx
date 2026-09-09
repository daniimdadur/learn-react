import type {ReactElement} from "react";
import {type Params, useParams} from "react-router";

function Image(): ReactElement {
    const params: Readonly<Params> = useParams<string>();
    return (
        <div>
            <h1>Image</h1>
            <p>Welcome to the Image page: {params['*']}</p>
        </div>
    )
}

export default Image;