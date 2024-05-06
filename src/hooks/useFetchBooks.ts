import { useCallback } from "react";
import { axios } from "../api/axios";
import { showModalMessage } from "../function/showModalMessage";
// import { useDispatch } from "react-redux";
// import { setName } from "../redux/nameSlice";
import { BookReviewType } from "../types/bookReviewType";

export const useFetchBooks = () => {
  // const dispatch = useDispatch();

  const getBooks = useCallback(async (offset: number) => {
    const token = sessionStorage.getItem("bookreview_token");
    const headers = { Authorization: `Bearer ${token}` };
    const params = { offset: String(offset) };
    return axios
      .get<Array<BookReviewType>>("/books", {
        params,
        headers,
      })
      .then((res) => {
        // dispatch(setName(res.data.name))
        console.log("getBooks成功" + res.data);
        return res.data;
      })
      .catch((res) => {
        showModalMessage("書籍一覧の取得に失敗しました。");
      })
      .finally(() => console.log("処理終了"));
  }, []);
  return { getBooks };
};
