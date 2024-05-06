import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useUpdateUser } from "../../hooks/useUpdateUser";


export const UserEdit:FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{name: string}>();
  const name = useSelector((state: RootState) => state.name.value);
  const {putUsers} = useUpdateUser();

  useEffect(() => {
    const input: HTMLInputElement | null = document.getElementById("updatingName") as HTMLInputElement;
    input.value = name;
  },[name])

  const onSubmitUpdateUser: SubmitHandler<{name: string}> = async (data) => {
    await putUsers(data.name);
    navigate("/");
  };

  return (
    <main className=" flex justify-center">
      <div className=" sm:w-96 w-4/5">
        <h1 className="text-xl font-bold max-w-full mt-8 flex items-center">
          アカウント名更新
        </h1>
        <form onSubmit={handleSubmit(onSubmitUpdateUser)} className=" w-full">
          <input
            id="updatingName"
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
          <button
            type="submit"
            className="px-8 py-2 w-full mb-4 mt-6 text-white bg-green-500 rounded-md"
          >
            更新する
          </button>
        </form>
      </div>
    </main>
  );
};
