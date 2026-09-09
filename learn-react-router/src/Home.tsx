import type {ReactElement} from "react";
import {type NavigateFunction, useNavigate} from "react-router";

function Home(): ReactElement {
    const navigate: NavigateFunction = useNavigate();

    function handleClick(): void {
        navigate({
            pathname: "/data",
        });
    }
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the home page!</p>
            <button onClick={handleClick}>Go To Data Page</button>
        </div>
    )
}

export default Home;