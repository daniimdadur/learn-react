import * as React from "react";
import {ProfileContext} from "./ProfileContext.tsx";

export default function Profile(): React.ReactElement {
    const profile: string = React.useContext(ProfileContext);

    return (
        <>
            <h2>Profile</h2>
            <p>Hai {profile}</p>
        </>
    )
}