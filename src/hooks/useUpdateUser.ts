import { useCallback } from "react";
import { showModalMessage } from "../function/showModalMessage";
import { axios } from "../api/axios";
import { setName } from "../redux/nameSlice";
import { useDispatch } from "react-redux";

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
          console.log("アカウント名の変更に失敗しました。" + res);
          showModalMessage("アカウント名の変更に失敗しました。");
        })
        .finally(() => console.log("処理終了"));
    },
    [dispatch]
  );
  return { putUsers };
};