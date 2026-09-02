import * as React from "react";

interface ProfileFormProps {
    name: string;
    setName(name: string): void;
}

export default function ProfileForm({name, setName}: ProfileFormProps): React.ReactElement {
    console.log("render ProfileForm:", name);
    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setName(event.target.value);
    }

    return (
        <>
            <h2>Profile Form</h2>
            <input type="text" value={name} onChange={handleChange}/>
        </>
    )
}