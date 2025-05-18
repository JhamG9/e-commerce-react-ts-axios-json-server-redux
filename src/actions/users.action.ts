import axiosInstance from "../api/axios";

export const getUsersAction = async () => {
  const response = await axiosInstance.get("/users");
  return response.data;
};