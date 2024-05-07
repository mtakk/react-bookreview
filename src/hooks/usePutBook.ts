import { useCallback } from "react";
import { showModalMessage } from "../function/showModalMessage";
import { axios } from "../api/axios";
import { BookType } from "../types/bookType";

export const usePutBook = () => {
  const putBook = useCallback(async (props: BookType & {id: string}) => {
    const token = sessionStorage.getItem("bookreview_token");
    const headers = { Authorization: `Bearer ${token}` };
    const {id, ...book} = props;
    return axios
      .put(`/books/${id}`, book, { headers })
      .then((res) => {
        console.log("書籍レビューの更新に成功しました。" + res);
        showModalMessage("書籍レビューを更新しました。");
      })
      .catch((res) => {
        console.log("書籍レビューの更新に失敗しました。" + res);
        showModalMessage("書籍レビューの更新に失敗しました。");
      })
      .finally(() => console.log("処理終了"));
  }, []);
  return { putBook };
};
