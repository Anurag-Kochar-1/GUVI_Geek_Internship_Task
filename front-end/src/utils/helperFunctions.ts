import axios from "axios";

const BASE_URL = import.meta.env.VITE_SERVER_DOMAIN;
axios.defaults.baseURL = BASE_URL


export async function authenticate(email: string) {
  try {
    return axios.post(`/api/authenticate`, { email });
  } catch (error) {
    return { error: "Email doesn't exist!!!" };
  }
}

export async function getUser(username: string) {
  try {
    const { data } = await axios.get(`/api/user/${username}`);
    return data;
  } catch (error) {
    return { error: "Password doesn't Match!!" };
  }
}

export async function registerUser(credentials: any) {
  try {
    console.log(`registerUser running from helperFunctions.ts`)
    const {
      data
    } = await axios.post(`/api/register`, {
      username: credentials.username,
      email: credentials.email,
      password: credentials.password,
    });

    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject({ error });
  }
}

export async function login(credentials: any) {
  try {
    if (credentials) {
      const { data } = await axios.post(`/api/login`, {
        email: credentials.email,
        password: credentials.password,
      });

      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: "Password doesn't match!!!" });
  }
}

export async function updateUser(response: any) {
  try {
    const token = window?.localStorage?.getItem("token");

    if (token) {
      const data = await axios.put(`/api/updateuser`, response, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
      });

      return Promise.resolve({data})
    } else {!token} {
        Promise.reject({ error: "No Token Found!!!" });
    }

  } catch (error) {
    return Promise.reject({ error: "Couldn't Update Profile!!!" });
  }
}
