import { useCallback } from "react";
import { showModalMessage } from "../function/showModalMessage";
import { axios } from "../api/axios";
import { BookType } from "../types/bookType";

export const usePostBook = () => {
  const postBook = useCallback(async (props: BookType) => {
    const token = sessionStorage.getItem("bookreview_token");
    const headers = { Authorization: `Bearer ${token}` };
    return axios
      .post("/books", props, { headers })
      .then((res) => {
        console.log("書籍投稿に成功しました。" + res);
        showModalMessage("書籍レビューを投稿しました。");
      })
      .catch((res) => {
        console.log("書籍投稿に失敗しました。" + res);
        showModalMessage("書籍投稿に失敗しました。");
      })
      .finally(() => console.log("処理終了"));
  }, []);
  return { postBook };
};
