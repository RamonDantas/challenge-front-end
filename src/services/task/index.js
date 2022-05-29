import axios from "axios";

const userService = axios.create({
  baseURL: "http://localhost:3001",
});

export const tasksCreate = (data) => {
  return userService.post("/tasks", data);
};

export const tasksUpdate = (data) => {
  return userService.put(`/tasks/${data._id}`, data);
};

export const tasksDelete = (data) => {
  return userService.delete(`/tasks/${data._id}`);
};
