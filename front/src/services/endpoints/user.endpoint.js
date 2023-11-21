import api  from "services/api";

async function Login(body) {
    try {
      const response = await api.post('/login', body);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      throw error; 
    }
  }
  
async function Register(body) {
    try {
        const response = await api.post('/login/save', body);
        console.log(response)
    return response;
    } catch (error) {
    console.log(error);
    }
}

async function FindAllUsers() {
    try {
        const response = await api.get('/login/all');
        console.log(response)
    return response;
    } catch (error) {
    console.log(error);
    }
}

export const UserEndpoint = {
    Login,
    Register,
    FindAllUsers
}