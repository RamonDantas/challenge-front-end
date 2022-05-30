import axios from "axios";

const tasksService = axios.create({
  baseURL: "http://localhost:3001",
});

tasksService.interceptors.request.use(async (request) => {
  const token = localStorage.getItem("token");
  request.headers.common.Authorization = `Bearer ${token}`;
  return request;
});

export const tasksCreate = (data) => {
  return tasksService.post("/tasks", data);
};

export const tasksUpdate = (data) => {
  return tasksService.put(`/tasks/${data._id}`, data);
};

export const tasksDelete = (data) => {
  return tasksService.delete(`/tasks/${data}`);
};
