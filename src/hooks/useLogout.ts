import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { clearName } from "../redux/nameSlice";
import { clearToken } from "../redux/tokenSlice";

export const useLogout = () => {
  const dispatch = useDispatch();
  const logout = useCallback(async () => {
    console.log("ログアウトを実行します。");
    sessionStorage.removeItem("bookreview_token");
    dispatch(clearName());
    dispatch(clearToken());
  }, [dispatch]);
  return { logout };
};
