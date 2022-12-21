import axios from 'axios';

const baseURL = 'http://localhost:3000';

export const login = (email, password) => {
    return axios.post(`${baseURL}/auth/login`,
        { email: email, password: password }
    ).then(
        response => response.data
    );
}

export const register = (
    name, display_name, profile_pic, email, password, location, occupation
) => {
    return axios.post(`${baseURL}/users/register`,
        {
            name: name,
            display_name: display_name,
            profile_pic: profile_pic,
            email: email,
            password: password,
            location: location,
            occupation: occupation,
        }
    ).then(
        response => response.data
    );
}
