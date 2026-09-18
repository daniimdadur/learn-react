import {Outlet} from "react-router";
import type {ReactElement} from "react";

export default function Layout(): ReactElement {
    return (
        <>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex items-center justify-center p-4">
                <Outlet />
            </div>
        </>
    )
}