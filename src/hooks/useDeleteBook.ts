import { useCallback } from "react";
import { showModalMessage } from "../function/showModalMessage";
import { axios } from "../api/axios";

export const useDeleteBook = () => {
  const deleteBook = useCallback(async (id: string) => {
    const token = sessionStorage.getItem("bookreview_token");
    const headers = { Authorization: `Bearer ${token}` };
    return axios
      .delete(`/books/${id}`, { headers })
      .then((res) => {
        console.log("書籍レビューの削除に成功しました。" + res);
        showModalMessage("書籍レビューを削除しました。");
      })
      .catch((res) => {
        console.log("書籍レビューの削除に失敗しました。" + res);
        showModalMessage("書籍レビューの削除に失敗しました。");
      })
      .finally(() => console.log("処理終了"));
  }, []);
  return { deleteBook };
};
