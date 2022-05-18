import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

async function signUp(newUser) {
  const result = await api.post("/user/signup", newUser);
  return result.data;
}

async function logIn(oldUser) {
  const result = await api.post("/user/login", oldUser);
  return result.data;
}

export { signUp, logIn };
