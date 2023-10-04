import { ACCESS_KEY, REFRESH_KEY } from "@/constants/auth";
import { server } from "@/lib/axios";
import { Storage } from "@/lib/storage";

export const refreshExpiredToken = async () => {

  try {
    const { data } = await server.put("/auth", null, {
      headers: {
        "Refresh-Token": `${Storage.getItem(REFRESH_KEY)}`,
      },
    });
    Storage.setItem(ACCESS_KEY, data.accessToken);
  } catch {
    alert("다시 로그인 해주세요");
    window.location.href = "/login";
    localStorage.clear();
  }
};
