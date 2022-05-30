import axios from "axios";

const projectService = axios.create({
  baseURL: "http://localhost:3001",
});

projectService.interceptors.request.use(async (request) => {
  const token = localStorage.getItem("token");
  request.headers.common.Authorization = `Bearer ${token}`;
  return request;
});

export const projectsList = (data) => {
  return projectService.get("/projects");
};

export const projectsCreate = (data) => {
  return projectService.post("/projects", data);
};

export const projectsUpdate = (data) => {
  return projectService.put(`/projects/${data._id}`, data);
};

export const projectsDelete = (data) => {
  return projectService.delete(`/projects/${data}`, {});
};
