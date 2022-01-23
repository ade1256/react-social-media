import { axiosInstance } from "../../services/axiosInstance";

export const GET_POSTS = () => {
  const url = `/posts`;
  const data = axiosInstance.get(url);
  return data;
}

export const GET_POST = (id) => {
  const url = `/posts/${id}`;
  const data = axiosInstance.get(url);
  return data;
}