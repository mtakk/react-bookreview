import { Route, Routes } from "react-router-dom";
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

export const Router: FC = memo(() => {
  // const loggedIn = useSelector((state: RootState) => state.loggedIn.value);
  const token = sessionStorage.getItem('bookreview_token');
  console.log("セッションストレージ");
  console.log(token);
  return (
    <>
      <Header />
      <Routes>
        {/* 毎回loginUserをelementに書くがこれでいいか？
        if (loginUser){}else{}でRouteを括ると、ホームとエラーページのどちらに返すのか制御できない気がする
        正しいURLで未ログインの時→Loginへ、誤ったURLの時→エラーページへ、この挙動はできない？
        */}
        <Route path="/signup" element={token ? <Home /> : <SignUp />} />
        <Route path="/login" element={token ? <Home /> : <Login />} />
        <Route path="/profile" element={token ? <UserEdit /> : <Login />} />
        <Route path="/new" element={token ? <PostBook /> : <Login />} />
        <Route path="/detail/:id" element={token ? <BookDetail /> : <Login />} />
        <Route path="/edit/:id" element={token ? <BookEdit /> : <Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Modal />
    </>
  );
})
//<Route path="/signup" element={loginUser ? <Home /> : <SignUp />} />

