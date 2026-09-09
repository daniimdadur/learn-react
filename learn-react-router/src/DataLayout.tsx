import type {ReactElement} from "react";
import {Outlet} from "react-router";

export default function DataLayout(): ReactElement {
    return (
        <>
            <div>
                <h1>This is header</h1>
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <p>this is footer</p>
            </div>
        </>
    )
}