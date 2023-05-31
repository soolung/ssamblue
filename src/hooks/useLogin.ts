import { usePasswordLoginMutation } from "@/interfaces/auth/mutation";
import { ChangeEvent, useState } from "react";
import { loginUserParams } from '@/interfaces/auth/api';

export const useLogin = () => {
  const [data, setData] = useState<loginUserParams>({
    email: "",
    password: "",
  });

  const handleData = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const mutation = usePasswordLoginMutation(data);

  return { data, handleData, mutation };
};
