import axiosClient from "./axios";

const END_POINT = {
  TODO_LIST: "todo_list"
}

export const getDataTodoList = () => {
  return axiosClient.get(`${END_POINT.TODO_LIST}`)
}

export const deleteDataTodoList = (id) => {
  return axiosClient.delete(`${END_POINT.TODO_LIST}/${id}`)
}

export const addDataTodoList = (task) => {
  return axiosClient.post(`${END_POINT.TODO_LIST}`, task)
}

export const updateDataTodoList = async (id, data) => {
  return await axiosClient.put(`${END_POINT.TODO_LIST}/${id}`, data);
};