import { UserContextType } from 'contexts/types/UserContext';
import axiosInstance from 'axiosInstance';

export function getCurrentUser() {
  return axiosInstance.get<UserContextType>('/getCurrentUser').then((res) => {
    const result = res.data;
    return result;
  });
}
