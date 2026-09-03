import type {ChangeEvent, ReactElement, RefObject} from "react";

interface GuestBookFormProps {
    ref: RefObject<HTMLInputElement | null>;
    name: string;
    setName: (name: string) => void;
}

export default function GuestBookForm({ref, name, setName}: GuestBookFormProps): ReactElement {
    return (
        <>
            <label htmlFor="name">Name</label><br/>
            <input ref={ref} type="text" name="name" value={name}
                   onChange={(e: ChangeEvent<HTMLInputElement>): void => setName(e.target.value)}/><br/>
        </>
    )
}