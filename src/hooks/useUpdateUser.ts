import { useCallback } from "react";
import { axios } from "../api/axios";
import { setName } from "../redux/nameSlice";
import { useDispatch } from "react-redux";
import { ApiError } from "../types/apiError";

export const useUpdateUser = () => {
  const dispatch = useDispatch();

  const putUsers = useCallback(
    async (updatingName: string) => {
      const token = sessionStorage.getItem("bookreview_token");
      const headers = { Authorization: `Bearer ${token}` };
      return axios
        .put<{ name: string }>("/users", { name: updatingName }, { headers })
        .then((res) => {
          console.log("putUser成功" + res);
          dispatch(setName(res.data.name));
        })
        .catch((res) => {
          const error = res?.response?.data as ApiError;
          throw error;
        })
        .finally(() => console.log("処理終了"));
    },
    [dispatch]
  );
  return { putUsers };
};