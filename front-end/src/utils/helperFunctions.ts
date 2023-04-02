import axios from "axios";

export async function authenticate(email: string) {
  try {
    return axios.post(`/api/authenticate`, { email });
  } catch (error) {
    return { error: "Email doesn't exist!!!" };
  }
}

export async function getUser({ username }: { username: string }) {
  try {
    const { data } = await axios.get(`/api/user/${username}`);
    return data;
  } catch (error) {
    return { error: "Password doesn't Match!!" };
  }
}
