import { useCallback } from "react";
import { axios } from "../api/axios";
import { BookReviewType } from "../types/bookReviewType";
import { ApiError } from "../types/apiError";

export const useFetchBooks = () => {
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
        console.log("getBooks成功");
        return res.data;
      })
      .catch((res) => {
        const error = res?.response?.data as ApiError;
        throw error;
      })
      .finally(() => console.log("処理終了"));
  }, []);
  return { getBooks };
};
