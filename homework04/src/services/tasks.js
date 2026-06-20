import axios from 'axios';

const API = 'https://6a365b5b766b831960f92959.mockapi.io/homework';

export const fetchTasks = async () => {
  const response = await axios.get(API);
  return response.data;
};

export const createTask = async (newTaskData) => {
  const response = await axios.post(API, newTaskData);
  return response.data;
};

export const updateTask = async (id, updatedData) => {
  const response = await axios.put(`${API}/${id}`, updatedData);
  return response.data;
};

export const deleteTask = async (id) => {
  const response = await axios.delete(`${API}/${id}`);
  return response.data;
};