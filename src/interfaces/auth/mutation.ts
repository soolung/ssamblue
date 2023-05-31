import { getAccessTokenByGoogle, loginUser, loginUserParams, } from "./api";
import { ACCESS_KEY, REFRESH_KEY } from "@/constants/auth";
import { Storage } from "@/lib/storage";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';

// 로그인
interface LoginResponse {
  accessToken: string,
  refreshToken: string,
  authority: "ROLE_TEACHER" | "ROLE_STUDENT",
  login: boolean
}

const login = ({ accessToken, refreshToken, authority }: LoginResponse, router: AppRouterInstance) => {
  if (authority === 'ROLE_STUDENT') {
    alert("심청이로 로그인하세요!");
    window.location.replace("https://www.simblue.kro.kr/login");
    return;
  }

  Storage.setItem(ACCESS_KEY, accessToken);
  Storage.setItem(REFRESH_KEY, refreshToken);

  router.push("/");
}

// 비밀번호 로그인
export const usePasswordLoginMutation = ({ email, password, }: loginUserParams) => {
  const router = useRouter();

  return useMutation(() => loginUser({ email, password }), {
    onSuccess: (data) => {
      login(data, router);
    },
    onError: () => {
      alert("로그인 실패");
      router.push("/login");
    },
  });
};


// google login
export const useGoogleLoginMutation = (code: string) => {
  const router = useRouter();

  return useMutation(() => getAccessTokenByGoogle(code), {
    onSuccess: (data) => {
      login(data, router);
    },
    onError: (err) => {
      alert("로그인 실패");
      router.push("/login");
    }
  });
}


