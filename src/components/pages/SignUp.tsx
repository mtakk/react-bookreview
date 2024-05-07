import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "../../types/user";
import { useSignUp } from "../../hooks/useSignUp";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { useUploadIcon } from "../../hooks/useUploadIcon";
import Compressor from "compressorjs";
import { useLogin } from "../../hooks/useLogin";
import { showModalApiErrorMessage } from "../../function/showModalApiErrorMessage";
import { ApiError } from "../../types/apiError";

export const SignUp = () => {
  const navigate = useNavigate();
  const { postUsers } = useSignUp();
  const { postUploads } = useUploadIcon();
  const { postSignin } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const [icon, setIcon] = useState<File>();

  const onSubmitSignUp: SubmitHandler<User> = async (data) => {
    try {
      const token = await postUsers(data);
      icon && (await postUploads({ authorization: token, icon: icon }));
      await postSignin(data);
      navigate("/");
    } catch (e) {
      const error = e as ApiError;
      showModalApiErrorMessage(error);
    }
  };
  const onConClickToLogin = () => navigate("/login");

  const onChangeIcon = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    file &&
      new Compressor(file, {
        quality: 0.6,
        maxWidth: 1024,
        maxHeight: 1024,
        success(result) {
          const compressedFile = new File([result], file.name, {
            type: file.type,
          });
          console.log("圧縮後何メガバイトか？" + (compressedFile.size / (1024*1024)))
          setIcon(compressedFile);
        },
      });
  };

  return (
    <main className=" flex justify-center">
      <div className=" sm:w-96 w-4/5">
        <h1 className="text-xl font-bold max-w-full mt-8 flex items-center">
          アカウント登録
        </h1>
        <form onSubmit={handleSubmit(onSubmitSignUp)} className=" w-full">
          <input
            type="text"
            placeholder="アカウント名"
            className="w-full px-2 py-4 mt-8 rounded-md border"
            {...register("name", {
              required: "必須入力です",
              maxLength: {
                value: 20,
                message: "20文字以下で入力してください",
              },
            })}
          />
          <p className="text-red-500 text-xs h-4">
            {errors.name?.message}&nbsp;
          </p>
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
          <p className="text-xs">アイコン画像を選択する</p>
          <input
            id="iconUploadBtn"
            type="file"
            accept="image/*"
            className="mt-4 text-xs text-gray-400 underline text-center"
            onChange={onChangeIcon}
          />
          <button
            type="submit"
            className="px-8 py-2 w-full mb-4 mt-6 text-white bg-green-500 rounded-md"
          >
            登録する
          </button>
        </form>
        <div className="text-center">
          <p
            className=" text-blue-600 underline m-2 text-xs"
            onClick={onConClickToLogin}
          >
            ログインはこちら
          </p>
        </div>
      </div>
    </main>
  );
};
