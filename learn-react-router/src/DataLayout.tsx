import type {ReactElement} from "react";
import {NavLink, Outlet} from "react-router";
import "./Data.css"

export default function DataLayout(): ReactElement {
    return (
        <>
            <div>
                <h1>This is header</h1>
            </div>
            <div>
                <ul>
                    <li><NavLink to="/data/products">Products</NavLink></li>
                    <li><NavLink to="/data/customers">Customers</NavLink></li>
                    <li><NavLink to="/data/sellers">Sellers</NavLink></li>
                    <li><NavLink to={{
                        pathname: "/data/products",
                        search: "?category=shoes",
                        hash: "#top"
                    }}>Products</NavLink></li>
                </ul>
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