import axiosClient from "./axios";

const END_POINT = {
  TODO_LIST: "todo_list"
}

export const getDataTodoList = () => {
  return axiosClient.get(`${END_POINT.TODO_LIST}`)
}