import { useCallback } from "react";
import { User } from "../types/user";
import { showModalMessage } from "../function/showModalMessage";
import { axios } from "../api/axios";

export const useSignUp = () => {
  const postUsers = useCallback(async (props: User) => {
    return axios
      .post("/users", props)
      .then((res) => {
        console.log("サインアップ成功");
        console.log(res);
        return res.data.token;
      })
      .catch((res) => {
        console.log("登録に失敗しました。" + res);
        showModalMessage("サインアップに失敗しました。");
      })
      .finally(() => console.log("処理終了"));
  }, []);
  return { postUsers };
};
//mitsuitest2
//mitsuitest2@test.com
//mitsuitest2
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTQ5MDk5MzEsImlhdCI6MTcxNDgyMzUzMSwic3ViIjoiNTQ1NDY1NTczNTQiLCJ1c2VyX2lkIjoiZmE3MDY0YTItZjU3YS00NTA0LWEwOGUtZDZiYzJjYWFlOTE2In0.V8Y0Z-lP2hoqlbP_iWX65fz0b2Zcsi-E1b8dbnLBjRg
//https://all-react-railway.s3.ap-northeast-1.amazonaws.com/1714652785007128502.png
