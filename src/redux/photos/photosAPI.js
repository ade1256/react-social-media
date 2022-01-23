import { axiosInstance } from "../../services/axiosInstance";

export const GET_PHOTOS = (albumId) => {
  const url = `/photos?albumId=${albumId}`;
  const data = axiosInstance.get(url);
  return data;
}

export const GET_PHOTO_DETAIL = (photoId) => {
  const url = `/photos/${photoId}`;
  const data = axiosInstance.get(url);
  return data;
}