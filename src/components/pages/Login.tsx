import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "../../types/user";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { useFetchUser } from "../../hooks/useFetchUser";

export const Login = () => {
  const navigate = useNavigate();
  const { postSignin } = useLogin();
  const { fetchUser } = useFetchUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<User, "name">>();


  const onSubmitSignUp: SubmitHandler<Omit<User, "name">> = async (data) => {
    const token = await postSignin(data);
    await fetchUser(token);
    navigate("/");
  };
  const onClickToSignUp = () => navigate("/signup");

  return (
    <main className=" flex justify-center">
      <div className=" sm:w-96 w-4/5">
        <h1 className="text-xl font-bold max-w-full mt-8 flex items-center">
          ログイン
        </h1>
        <form onSubmit={handleSubmit(onSubmitSignUp)} className=" w-full">
          <input
            type="email"
            placeholder="メールアドレス"
            className="w-full px-2 py-4 mt-4 rounded-md border"
            {...register("email", {
              required: "必須入力です",
            })}
          />
          <p className=" text-red-500 text-xs h-4">
            {errors.email?.message}&nbsp;
          </p>
          <input
            type="text"
            placeholder="パスワード"
            className="w-full px-2 py-4 mt-4 rounded-md border"
            {...register("password", {
              required: "必須入力です",
              minLength: {
                value: 4,
                message: "4文字以上で入力してください",
              },
              maxLength: {
                value: 20,
                message: "20文字以下で入力してください",
              },
            })}
          />
          <p className=" text-red-500 text-xs h-4">
            {errors.password?.message}&nbsp;
          </p>
          <button
            type="submit"
            className="px-8 py-2 w-full mb-4 mt-6 text-white bg-green-500 rounded-md"
          >
            ログインする
          </button>
        </form>
        <div className="text-center">
          <p
            className=" text-blue-600 underline m-2 text-xs"
            onClick={onClickToSignUp}
          >
            アカウント登録はこちら
          </p>
        </div>
      </div>
    </main>
  );
};
