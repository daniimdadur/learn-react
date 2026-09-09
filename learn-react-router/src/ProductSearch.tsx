import {type NavigateFunction, useNavigate, useSearchParams} from "react-router";
import {type ReactElement, useState} from "react";

export default function ProductSearch(): ReactElement {
    const [searchParams] = useSearchParams();
    const navigate: NavigateFunction = useNavigate();

    const [search, setSearch] = useState(searchParams.get("search") || "");

    function handleSearch(): void {
        if (search) {
            navigate({
                pathname: "/data/products/search",
                search: `?search=${search}`,
            })
        }
    }

    return (
        <>
            <h2>Search Product</h2>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
            <p>
                you're looking for : {searchParams.get("search")}
            </p>
        </>
    )
}