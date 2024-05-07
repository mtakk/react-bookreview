import { useCallback } from "react";
import { User } from "../types/user";
import { axios } from "../api/axios";
import { ApiError } from "../types/apiError";

export const useSignUp = () => {
  const postUsers = useCallback(async (props: User) => {
    return axios
      .post("/users", props)
      .then((res) => {
        return res.data.token;
      })
      .catch((res) => {
        const error = res?.response?.data as ApiError;
        throw error;
      })
      .finally(() => console.log("処理終了"));
  }, []);
  return { postUsers };
};