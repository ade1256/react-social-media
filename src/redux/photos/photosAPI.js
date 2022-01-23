import { axiosInstance } from "../../services/axiosInstance";

export const GET_PHOTOS = (albumId) => {
  const url = `/photos?albumId=${albumId}`;
  const data = axiosInstance.get(url);
  return data;
}