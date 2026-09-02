import * as React from "react";
import {ProfileContext} from "./ProfileContext.tsx";

export default function ProfileAddress(): React.ReactElement {
    const profile: string = React.useContext(ProfileContext);

    return (
        <>
            <h2>Profile Address</h2>
            <p>{profile} Address</p>
        </>
    )
}