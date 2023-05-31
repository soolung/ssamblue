import {
  loginUser,
  loginUserParams,
} from "./api";
import { ACCESS_KEY, REFRESH_KEY } from "@/constants/token";
import { Storage } from "@/lib/storage";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";

/** 로그인 */
export const useLoginUserMutation = ({ email, password, }: loginUserParams) => {
  const router = useRouter();

  return useMutation(() => loginUser({ email, password }), {
    onSuccess: (res) => {
      const { accessToken, refreshToken } = res.data;
      Storage.setItem(ACCESS_KEY, accessToken);
      Storage.setItem(REFRESH_KEY, refreshToken);

      router.push("/");
    },
    onError: () => {
      alert("로그인 실패");
    },
  });
};
