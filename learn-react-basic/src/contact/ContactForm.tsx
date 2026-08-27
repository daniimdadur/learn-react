import * as React from "react";
import {useImmer} from "use-immer";

// 1. Definisikan interface untuk bentuk data state
interface Contact {
    name: string;
    message: string;
}

const initialData: Contact = {
    name: "",
    message: "",
};

export default function ContactForm() {
    // TypeScript akan otomatis mengenali tipe state berdasarkan initialData
    const [contact, setContact] = useImmer<Contact>(initialData);

    function handleNameChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setContact(contact => {
            contact.name = e.target.value;
        });
    }

    function handleMessageChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setContact(contact => {
            contact.message = e.target.value;
        });
    }

    return (
        <div>
            <h1>Contact Form</h1>
            <form>
                <input
                    type="text"
                    placeholder="Name"
                    value={contact.name}
                    onChange={handleNameChange}
                />
                <br/>
                <input
                    type="text"
                    placeholder="Message"
                    value={contact.message}
                    onChange={handleMessageChange}
                />
            </form>
            <h1>Contact Detail</h1>
            <p>Name : {contact.name}</p>
            <p>Message : {contact.message}</p>
        </div>
    );
}