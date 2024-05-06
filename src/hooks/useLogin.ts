import { useCallback } from "react";
import { User } from "../types/user";
import { showModalMessage } from "../function/showModalMessage";
import { axios } from "../api/axios";

export const useLogin = () => {
  const postSignin = useCallback(async (props: Omit<User, "name">) => {
    return axios
      .post("/signin", props)
      .then((res) => {
        console.log("ログイン成功");
        console.log(res);
        sessionStorage.setItem('bookreview_token', res.data.token);
        return res.data.token;
      })
      .catch((res) => {
        console.log("ログインに失敗しました。" + res);
        sessionStorage.removeItem('bookreview_token');
        showModalMessage("ログインに失敗しました。");
      })
      .finally(() => console.log("処理終了"));
  }, []);
  return { postSignin };
};

// ここでtype LoginUser = {email: string; password: string}を定義する方が綺麗か？
// ログインユーザー保持用にも{email: string; password: string; token: string;}を定義する方が綺麗か？
// sessinStorageかlocalStorageを使うしかない、Reactの実装ではログイン保持できないという考えであってるか？
// セキュリティ的に、トークンをsessinStorageに保存することはあり得るのか？