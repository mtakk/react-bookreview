import { axios } from "../api/axios";
import { showModalMessage } from "../function/showModalMessage";
import { useDispatch } from "react-redux";
import { setName } from "../redux/nameSlice";

export const useFetchUser = () => {
  type LoginUser = {
    name: string;
    iconUrl: string;
  };

  const dispatch = useDispatch();

  const fetchUser = async (token: string) => {
    const headers = { Authorization: `Bearer ${token}` };
    return axios
      .get<LoginUser>("/users", { headers })
      .then((res) => {
        dispatch(setName(res.data.name))
        console.log("fetchUser成功" + res);
      })
      .catch((res) => {
        console.log("失敗しました。" + res);
        showModalMessage("ユーザー情報の取得に失敗しました。");
      })
      .finally(() => console.log("処理終了"));
  };

  return { fetchUser };
};
