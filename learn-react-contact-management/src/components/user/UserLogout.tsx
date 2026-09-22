import type {ReactElement} from "react";
import {useEffectOnce, useLocalStorage} from "react-use";
import {useNavigate} from "react-router";
import {userLogout} from "../../lib/api/UserApi.ts";
import {alertError} from "../../lib/alert.ts";

export default function UserLogout(): ReactElement {
    const [token, setToken] = useLocalStorage("token", "");
    const navigate = useNavigate();

    async function handleLogout() {
        if (!token) {
            await alertError("User is not authenticated. Please log in.");
            return;
        }
        const response = await userLogout(token);
        const responseBody = await response.json();
        console.log(responseBody);

        if (response.status === 200) {
            setToken("");
            await navigate({
              pathname: "/login",
            })
        } else {
            await alertError(responseBody.errors)
        }
    }

    useEffectOnce(() => {
        handleLogout()
            .then(() => console.log("Successfully logged out"))
    });

    return(
        <>
        </>
    )
}