import type {ReactElement} from "react";
import {type Params, useParams} from "react-router";

function NotFound(): ReactElement {
    const params: Readonly<Params> = useParams<string>();
    return (
        <div>
            <h1>NotFound</h1>
            <p>Welcome to the NotFound page: {params['*']}</p>
        </div>
    )
}

export default NotFound;