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

async function updateUser(user) {
  const result = await api.put("/user/update", user);
  return result.data;
}

async function getTopTenResults() {
  const result = await api.get("/top10");
  return result.data;
}

async function searchResults(value) {
  const result = await api.post(`/search/name`, { value: value });
  return result.data;
}

export { signUp, logIn, updateUser, getTopTenResults, searchResults };
