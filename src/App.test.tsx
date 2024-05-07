import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Login } from "./components/pages/Login";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

test("ログインタイトル", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Login />
      </Provider>
    </BrowserRouter>
  );
  const linkElement = screen.getByText("ログイン");
  expect(linkElement).toBeInTheDocument();
});

test("ログインメールアドレス", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Login />
      </Provider>
    </BrowserRouter>
  );
  const email = screen.getByPlaceholderText("メールアドレス");
  expect(email).toBeInTheDocument();
});

test("ログインパスワード", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Login />
      </Provider>
    </BrowserRouter>
  );
  const password = screen.getByPlaceholderText("パスワード");
  expect(password).toBeInTheDocument();
});


test("ログインボタン", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Login />
      </Provider>
    </BrowserRouter>
  );
  const button = screen.getByText("ログインする");
  expect(button).toBeInTheDocument();
});