import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearName } from "../redux/nameSlice";

export const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = useCallback(() => {
    console.log("ログアウトを実行します。");
    sessionStorage.removeItem("bookreview_token");
    dispatch(clearName());
    navigate("/login");
  }, [navigate, dispatch]);
  return { logout };
};
