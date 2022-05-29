import axios from "axios";

const userService = axios.create({
  baseURL: "http://localhost:3001",
});

export const createUser = (data) => {
  return userService.post("/auth/register", data);
};

export const login = (data) => {
  return userService.post("/auth/authenticate", data);
};
