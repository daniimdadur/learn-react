import {type ReactElement, type SyntheticEvent, useEffect, useRef, useState} from "react";
import {useLocalStorage} from "react-use";
import {contactDelete, contactList} from "../../lib/api/ContactApi.ts";
import {alertConfirm, alertError, alertSuccess} from "../../lib/alert.ts";
import {Link} from "react-router";

interface Contact {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
}

interface ContactListResponseBody {
    data: Contact[];
    paging: {
        total_page: number;
        total_data?: number;
        current_page?: number;
    };
    errors?: string;
}

export default function ContactListEx(): ReactElement {

    const [token,] = useLocalStorage("token", "");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [contacts, setContacts] = useState<Contact[]>([]);

    //part for hide and show search form
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement | null>(null);

    function getPages(): number[] {
        const pages: number[] = [];
        for (let i = 1; i <= totalPage; i++) {
            pages.push(i);
        }
        return pages;
    }

    async function handleSearchContacts(e: SyntheticEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();
        setPage(1);
        await loadContacts(1);
    }

    async function handlePageChange(targetPage: number): Promise<void> {
        setPage(targetPage);
        await loadContacts(targetPage);
    }

    async function loadContacts(targetPage: number = page): Promise<void> {
        if (!token) {
            await alertError("User is not authenticated. Please log in.");
            return;
        }

        const response: Response = await contactList(token, {name, phone, email, page: targetPage});
        const responseBody: ContactListResponseBody = await response.json();
        console.log(responseBody);

        if (response.status === 200) {
            setContacts(responseBody.data);
            setTotalPage(responseBody.paging.total_page);
        } else {
            await alertError(responseBody.errors ?? "Something went wrong");
        }
    }

    async function handleContactDelete(id: number): Promise<void> {
        if (!token) {
            await alertError("User is not authenticated. Please log in.");
            return;
        }

        if (!await alertConfirm("Are you sure you want to delete this contact?")) {
            return;
        }

        const response: Response = await contactDelete(token, id);
        const responseBody: ContactListResponseBody = await response.json();
        console.log(responseBody);

        if (response.status === 200) {
            await alertSuccess("Contact deleted successfully");
            await loadContacts(page);
        } else {
            await alertError(responseBody.errors ?? "Something went wrong");
        }
    }

    useEffect(() => {
        let isCancelled = false;

        async function loadInitialContacts(): Promise<void> {
            if (!token) {
                await alertError("User is not authenticated. Please log in.");
                return;
            }

            const response: Response = await contactList(token, {name: "", phone: "", email: "", page: 1});
            const responseBody: ContactListResponseBody = await response.json();
            console.log(responseBody);

            if (isCancelled) {
                return;
            }

            if (response.status === 200) {
                setContacts(responseBody.data);
                setTotalPage(responseBody.paging.total_page);
            } else {
                await alertError(responseBody.errors ?? "Something went wrong");
            }
        }

        loadInitialContacts().catch(console.error);

        return () => {
            isCancelled = true;
        };
    }, [token]);

    const toggleSearchForm = (): void => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return <>
        <div className="flex items-center mb-6">
            <i className="fas fa-users text-blue-400 text-2xl mr-3"></i>
            <h1 className="text-2xl font-bold text-white">My Contacts</h1>
        </div>

        <div className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 p-6 mb-8 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <i className="fas fa-search text-blue-400 mr-3"></i>
                    <h2 className="text-xl font-semibold text-white">Search Contacts</h2>
                </div>
                <button type="button" onClick={toggleSearchForm}
                        className="text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded-full focus:outline-none transition-all duration-200">
                    <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} text-lg`}></i>
                </button>
            </div>
            <div
                ref={contentRef}
                style={{
                    transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, margin-top 0.3s ease-in-out',
                    overflow: 'hidden',
                    maxHeight: `${height}px`,
                    opacity: isOpen ? 1 : 0,
                    marginTop: isOpen ? '1rem' : '0px',
                }}
            >
                <form onSubmit={handleSearchContacts}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div>
                            <label htmlFor="search_name" className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i className="fas fa-user text-gray-500"></i>
                                </div>
                                <input type="text" id="search_name" name="search_name"
                                       className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                       placeholder="Search by name"
                                       value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="search_email" className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i className="fas fa-envelope text-gray-500"></i>
                                </div>
                                <input type="text" id="search_email" name="search_email"
                                       className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                       placeholder="Search by email"
                                       value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="search_phone" className="block text-gray-300 text-sm font-medium mb-2">Phone</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i className="fas fa-phone text-gray-500"></i>
                                </div>
                                <input type="text" id="search_phone" name="search_phone"
                                       className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                       placeholder="Search by phone"
                                       value={phone} onChange={(e) => setPhone(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 text-right">
                        <button type="submit"
                                className="px-5 py-3 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5">
                            <i className="fas fa-search mr-2"></i> Search
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
                className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom overflow-hidden border-2 border-dashed border-gray-700 card-hover animate-fade-in">
                <Link to="/dashboard/contacts/create" className="block p-6 h-full">
                    <div className="flex flex-col items-center justify-center h-full text-center">
                        <div
                            className="w-20 h-20 bg-gradient rounded-full flex items-center justify-center mb-5 shadow-lg transform transition-transform duration-300 hover:scale-110">
                            <i className="fas fa-user-plus text-3xl text-white"></i>
                        </div>
                        <h2 className="text-xl font-semibold text-white mb-3">Create New Contact</h2>
                        <p className="text-gray-300">Add a new contact to your list</p>
                    </div>
                </Link>
            </div>

            {contacts.map(contact => (
                <div key={contact.id}
                     className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 overflow-hidden card-hover animate-fade-in">
                    <div className="p-6">
                        <Link to={`/dashboard/contacts/${contact.id}`}
                              className="block cursor-pointer hover:bg-gray-700 rounded-lg transition-all duration-200 p-3">
                            <div className="flex items-center mb-3">
                                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3 shadow-md">
                                    <i className="fas fa-user text-white"></i>
                                </div>
                                <h2 className="text-xl font-semibold text-white hover:text-blue-300 transition-colors duration-200">
                                    {contact.first_name} {contact.last_name}
                                </h2>
                            </div>
                            <div className="space-y-3 text-gray-300 ml-2">
                                <p className="flex items-center">
                                    <i className="fas fa-user-tag text-gray-500 w-6"></i>
                                    <span className="font-medium w-24">First Name:</span>
                                    <span>{contact.first_name}</span>
                                </p>
                                <p className="flex items-center">
                                    <i className="fas fa-user-tag text-gray-500 w-6"></i>
                                    <span className="font-medium w-24">Last Name:</span>
                                    <span>{contact.last_name}</span>
                                </p>
                                <p className="flex items-center">
                                    <i className="fas fa-envelope text-gray-500 w-6"></i>
                                    <span className="font-medium w-24">Email:</span>
                                    <span>{contact.email}</span>
                                </p>
                                <p className="flex items-center">
                                    <i className="fas fa-phone text-gray-500 w-6"></i>
                                    <span className="font-medium w-24">Phone:</span>
                                    <span>{contact.phone}</span>
                                </p>
                            </div>
                        </Link>
                        <div className="mt-4 flex justify-end space-x-3">
                            <Link to={`/dashboard/contacts/${contact.id}/edit`}
                                  className="px-4 py-2 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-md flex items-center">
                                <i className="fas fa-edit mr-2"></i> Edit
                            </Link>
                            <button type="button" onClick={() => handleContactDelete(contact.id)}
                                    className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-md flex items-center">
                                <i className="fas fa-trash-alt mr-2"></i> Delete
                            </button>
                        </div>
                    </div>
                </div>
            ))}

        </div>

        <div className="mt-10 flex justify-center">
            <nav
                className="flex items-center space-x-3 bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 p-3 animate-fade-in">
                {page > 1 &&
                    <button type="button" onClick={() => handlePageChange(page - 1)}
                            className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center">
                        <i className="fas fa-chevron-left mr-2"></i> Previous
                    </button>
                }
                {getPages().map(value => {
                    if (value === page) {
                        return <button type="button" key={value} onClick={() => handlePageChange(value)}
                                       className="px-4 py-2 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-md">
                            {value}
                        </button>
                    } else {
                        return <button type="button" key={value} onClick={() => handlePageChange(value)}
                                       className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200">
                            {value}
                        </button>
                    }
                })}
                {page < totalPage &&
                    <button type="button" onClick={() => handlePageChange(page + 1)}
                            className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center">
                        Next <i className="fas fa-chevron-right ml-2"></i>
                    </button>
                }
            </nav>
        </div>
    </>
}