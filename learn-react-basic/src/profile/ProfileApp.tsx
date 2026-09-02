import * as React from "react";
import {ProfileContext} from "./ProfileContext.tsx";
import Profile from "./Profile.tsx";
import ProfileAddress from "./ProfileAddress.tsx";
import ProfileForm from "./ProfileForm.tsx";

export default function ProfileApp(): React.ReactElement {
    const [name, setName] = React.useState("Bruno");

    return (
        <>
            <ProfileContext.Provider value={name}>
                <h1>Profile App</h1>
                <ProfileForm name={name} setName={setName} />
                <Profile/>
                <ProfileAddress/>
            </ProfileContext.Provider>
        </>
    )
}