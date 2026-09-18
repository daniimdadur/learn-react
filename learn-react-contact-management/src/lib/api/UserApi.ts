interface UserRegisterPayload {
    username: string;
    password: string;
    name: string;
}

interface UserLoginPayload {
    username: string;
    password: string;
}

interface UserUpdateProfilePayload {
    name: string;
}

interface UserUpdatePasswordPayload {
    password: string;
}

const API_PATH = import.meta.env.VITE_API_PATH as string;

export const userRegister = async (data: UserRegisterPayload): Promise<Response> => {
    return await fetch(`${API_PATH}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data),
    });
};

export const userLogin = async (data: UserLoginPayload): Promise<Response> => {
    return await fetch(`${API_PATH}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data),
    });
};

export const userUpdateProfile = async (token: string, data: UserUpdateProfilePayload): Promise<Response> => {
    return await fetch(`${API_PATH}/users/current`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token,
        },
        body: JSON.stringify(data),
    });
};

export const userUpdatePassword = async (token: string, data: UserUpdatePasswordPayload): Promise<Response> => {
    return await fetch(`${API_PATH}/users/current`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token,
        },
        body: JSON.stringify(data),
    });
};

export const userDetail = async (token: string): Promise<Response> => {
    return await fetch(`${API_PATH}/users/current`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': token,
        },
    });
};

export const userLogout = async (token: string): Promise<Response> => {
    return await fetch(`${API_PATH}/users/logout`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Authorization': token,
        },
    });
};