import { useCallback, useState } from "react";
import { axios } from "../api/axios";
import { BookReviewMineType } from "../types/bookReviewMineType";
import { ApiError } from "../types/apiError";

export const useFetchBook = () => {
  const [loading, setLoading] = useState(false);
  const getBook = useCallback(async (id: string) => {
    setLoading(true);
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
        const error = res?.response?.data as ApiError;
        throw error;
      })
      .finally(() => {
        console.log("処理終了");
        setLoading(false);
      });
  }, []);
  return { getBook, loading, setLoading };
};
