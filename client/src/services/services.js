import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

async function signUp(newUser) {
  const result = await api.post("/user/signup", newUser);
  return result.data;
}

export { signUp };
