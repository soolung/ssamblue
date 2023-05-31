import { ACCESS_KEY } from '@/constants/token';
import { Storage } from "@/lib/storage";

export const authorization = () => {
  return {
    headers: {
      Authorization: `Bearer ${Storage.getItem(ACCESS_KEY)}`,
    },
  };
};
