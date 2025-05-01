import axios from "axios";

const API_URL = 'https://681224243ac96f7119a7002b.mockapi.io/toDo';

export const getToDoData = async () => {
  const allTasks = await axios.get(API_URL);
  return allTasks.data;
}

export const postToDoData = async (newItem) => {
  const newTask = await axios.post(API_URL, newItem);
  return newTask.data;
};

export const deleteToDoData = async (idRemove) => {
 const deleteTask = await axios.delete(`${API_URL}/${idRemove}`);
 return deleteTask.data;
}