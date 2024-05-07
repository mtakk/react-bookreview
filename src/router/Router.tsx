import { Navigate, Route, Routes } from "react-router-dom";
import { SignUp } from "../components/pages/SignUp";
import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { Header } from "../components/organism/Header";
import { Modal } from "../components/organism/Modal";
import { FC, memo } from "react";
import { UserEdit } from "../components/pages/UserEdit";
import { PostBook } from "../components/pages/PostBook";
import { BookDetail } from "../components/pages/BookDetail";
import { BookEdit } from "../components/pages/BookEdit";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const Router: FC = memo(() => {
  let token = useSelector((state:RootState) => state.token.value);
  console.log("useSelectorから取得" +token);
  if (!token) {
    token = sessionStorage.getItem("bookreview_token") ?? "";
    console.log("sessionStorageから取得" +token);
  }
  return (
    <>
      <Header />
      <Routes>
        {/* 毎回loginUserをelementに書くがこれでいいか？*/}
        <Route path="/signup" element={token ? <Navigate replace to="/"/> : <SignUp />} />
        <Route path="/login" element={token ? <Navigate replace to="/"/> : <Login />} />
        <Route path="/profile" element={token ? <UserEdit /> : <Navigate replace to="/login"/>} />
        <Route path="/new" element={token ? <PostBook /> : <Navigate replace to="/login"/>} />
        <Route
          path="/detail/:id"
          element={token ? <BookDetail /> : <Login />}
        />
        <Route path="/edit/:id" element={token ? <BookEdit /> : <Navigate replace to="/login"/>} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Modal />
    </>
  );
});
