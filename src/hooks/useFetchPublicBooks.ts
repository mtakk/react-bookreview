import { useCallback } from "react";
import { axios } from "../api/axios";
import { BookReviewType } from "../types/bookReviewType";
import { ApiError } from "../types/apiError";

export const useFetchPublicBooks = () => {
  const getPublicBooks = useCallback(async (offset: number) => {
    const params = { offset: String(offset) };
    return axios
      .get<Array<BookReviewType>>("/public/books", {
        params
      })
      .then((res) => {
        console.log("getPublicBooks成功");
        return res.data;
      })
      .catch((res) => {
        const error = res?.response?.data as ApiError;
        throw error;
      })
      .finally(() => console.log("処理終了"));
  }, []);
  return { getPublicBooks };
};
