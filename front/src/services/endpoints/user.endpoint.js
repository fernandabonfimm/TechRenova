import { api } from "services/api";

async function Login(body){
    const response = await api.post('login/', body);
    return response.data;
};

async function Register(body){
    const response = await api.post('login/save', body);
    return response.data;
}

export const UserEndpoint = {
    Login,
    Register
}