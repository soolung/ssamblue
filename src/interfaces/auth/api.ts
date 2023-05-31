import { server } from "@/lib/axios";


// 구글 OAuth Link 조회
export const getGoogleAuthLink = async () => {
  return (await server.get("/auth/google")).data;
};


// 구글 액세스토큰으로 로그인
export const getAccessTokenByGoogle = async (code: string) => {
  return (await server.post(`/auth/google/callback?code=${code}`)).data;
};


// 로그인
export interface loginUserParams {
  email: string,
  password: string
}

export const loginUser = async ({ email, password }: loginUserParams) => {
  return (
    await server.post("/auth", { email, password })
  ).data;
};
