import { FC, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useFetchUser } from "../../hooks/useFetchUser";
import { useLogout } from "../../hooks/useLogout";

export const Header: FC = () => {
  const navigate = useNavigate();
  const { fetchUser } = useFetchUser();
  const { logout } = useLogout();
  const name = useSelector((state: RootState) => state.name.value);
  const token = sessionStorage.getItem("bookreview_token");

  useEffect(() => {
    if (token && !name) {
      fetchUser(token);
    }
  }, [token, name, fetchUser]);

  const onClickToLogin = () => navigate("/login");
  const onClickToTop = () => navigate("/");
  const onClickToLogout = async () => {
    await logout();
    navigate("/login");
  };
  const onClickToUserEdit = () => navigate("/profile");
  const onClickToPostBook = () => navigate("/new");

  return (
    <>
      <header className=" bg-green-500 text-white">
        <nav className="flex justify-between container mx-auto items-center p-4">
          <div className=" text-xl cursor-pointer" onClick={onClickToTop}>
            書籍レビュー
          </div>
          <ul>
            {token ? (
              <>
                <li className="text-xs">{name}</li>
                <li
                  className="text-xs underline cursor-pointer"
                  onClick={onClickToPostBook}
                >
                  新規投稿
                </li>
                <li
                  className="text-xs underline cursor-pointer"
                  onClick={onClickToUserEdit}
                >
                  アカウント編集
                </li>
                <li
                  className="text-xs underline cursor-pointer"
                  onClick={onClickToLogout}
                >
                  ログアウト
                </li>
              </>
            ) : (
              <li className="text-xs" onClick={onClickToLogin}>
                ログイン
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};
