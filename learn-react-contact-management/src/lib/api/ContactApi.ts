const API_PATH = import.meta.env.VITE_API_PATH as string;

// Interface untuk payload Request & Query
export interface ContactPayload {
    first_name: string;
    last_name?: string;
    email?: string;
    phone?: string;
}

export interface ContactUpdatePayload extends ContactPayload {
    id: string | number;
}

export interface ContactQueryParams {
    name?: string;
    phone?: string;
    email?: string;
    page?: string | number;
}

export const contactCreate = async (
    token: string,
    { first_name, last_name, email, phone }: ContactPayload
): Promise<Response> => {
    return await fetch(`${API_PATH}/contacts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({
            first_name,
            last_name,
            email,
            phone
        })
    });
};

export const contactList = async (
    token: string,
    { name, phone, email, page }: ContactQueryParams = {}
): Promise<Response> => {
    const url = new URL(`${API_PATH}/contacts`);

    if (name) url.searchParams.append('name', name);
    if (phone) url.searchParams.append('phone', phone);
    if (email) url.searchParams.append('email', email);
    if (page !== undefined) url.searchParams.append('page', String(page));

    return await fetch(url.toString(), {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': token
        }
    });
};

export const contactDelete = async (
    token: string,
    id: string | number
): Promise<Response> => {
    return await fetch(`${API_PATH}/contacts/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Authorization': token
        }
    });
};

export const contactDetail = async (
    token: string,
    id: string | number
): Promise<Response> => {
    return await fetch(`${API_PATH}/contacts/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': token
        }
    });
};

export const contactUpdate = async (
    token: string,
    { id, first_name, last_name, email, phone }: ContactUpdatePayload
): Promise<Response> => {
    return await fetch(`${API_PATH}/contacts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({
            first_name,
            last_name,
            email,
            phone
        })
    });
};