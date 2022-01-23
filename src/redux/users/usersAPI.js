import { axiosInstance } from "../../services/axiosInstance";

export const GET_USERS = () => {
  const url = `/users`;
  const data = axiosInstance.get(url);
  return data;
}

export const GET_USER = (id) => {
  const url = `/users/${id}`;
  const data = axiosInstance.get(url);
  return data;
}