import { axiosInstance } from "../../services/axiosInstance";


export const GET_ALBUM = (userId) => {
  const url = `/albums?userId=${userId}`;
  const data = axiosInstance.get(url);
  return data;
}