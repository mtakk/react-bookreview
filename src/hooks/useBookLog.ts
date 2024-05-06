import { useCallback } from "react";
import { axios } from "../api/axios";

export const useBookLog = () => {
  const postBookLog = useCallback(async (selectBookId: string) => {
    const token = sessionStorage.getItem("bookreview_token");
    const headers = { Authorization: `Bearer ${token}` };
    return axios
      .post("/logs", { selectBookId }, { headers })
      .then((res) => {
        console.log("ログの送信に成功しました。" + res);
      })
      .catch((res) => {
        console.log("ログの送信に失敗しました。" + res);
      })
      .finally(() => console.log("処理終了"));
  }, []);
  return { postBookLog };
};
