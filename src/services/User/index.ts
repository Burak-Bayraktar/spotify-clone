import { UserContextType } from 'contexts/types/UserContext';
import axiosInstance from "axiosInstance";

export function getCurrentUser() {
    return axiosInstance.get("/getCurrentUser").then((res) => {
      const result:UserContextType = res.data;
      return result;
    });
  }