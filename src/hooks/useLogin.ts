import { useCallback } from "react";
import { User } from "../types/user";
import { axios } from "../api/axios";
import { ApiError } from "../types/apiError";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/tokenSlice";

export const useLogin = () => {
  const dispatch = useDispatch();
  const postSignin = useCallback(async (props: Omit<User, "name">) => {
    return axios
      .post("/signin", props)
      .then((res) => {
        sessionStorage.setItem("bookreview_token", res.data.token);
        dispatch(setToken(res.data.token));
        return res.data.token;
      })
      .catch((res) => {
        sessionStorage.removeItem("bookreview_token");
        const error = res?.response?.data as ApiError;
        throw error;
      })
      .finally(() => console.log("ログイン終了"));
  }, []);
  return { postSignin };
};

// ここでtype LoginUser = {email: string; password: string}を定義する方が綺麗か？
// ログインユーザー保持用にも{email: string; password: string; token: string;}を定義する方が綺麗か？
// sessinStorageかlocalStorageを使うしかない、Reactの実装ではログイン保持できないという考えであってるか？
// セキュリティ的に、トークンをsessinStorageに保存することはあり得るのか？
