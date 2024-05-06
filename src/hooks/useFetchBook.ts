import { useCallback } from "react";
import { axios } from "../api/axios";
import { showModalMessage } from "../function/showModalMessage";
import { BookReviewMineType } from "../types/bookReviewMineType";

export const useFetchBook = () => {
  const getBook = useCallback(async (id: string) => {
    const token = sessionStorage.getItem("bookreview_token");
    const headers = { Authorization: `Bearer ${token}` };
    return axios
      .get<BookReviewMineType>(`/books/${id}`, {
        headers,
      })
      .then((res) => {
        console.log(res);
        console.log("getBook成功" + res.data);
        return res.data;
      })
      .catch((res) => {
        showModalMessage("書籍情報の取得に失敗しました。");
      })
      .finally(() => console.log("処理終了"));
  }, []);
  return { getBook };
};
