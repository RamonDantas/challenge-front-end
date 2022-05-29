import axios from "axios";

const userService = axios.create({
  baseURL: "http://localhost:3001",
});

export const projectsList = (data) => {
  return userService.get("/projects");
};

export const projectsCreate = (data) => {
  return userService.post("/projects", data);
};

export const projectsUpdate = (data) => {
  return userService.put(`/projects/${data._id}`, data);
};

export const projectsDelete = (data) => {
  return userService.delete(`/projects/${data._id}`);
};
