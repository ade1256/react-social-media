import { axiosInstance } from "../../services/axiosInstance";

export const GET_COMMENT = (postId) => {
  const url = `/comments?postId=${postId}`;
  const data = axiosInstance.get(url);
  return data;
}

export const GET_COMMENTS = () => {
  const url = `/comments`;
  const data = axiosInstance.get(url);
  return data;
}