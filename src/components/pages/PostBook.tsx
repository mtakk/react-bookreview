import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { BookType } from "../../types/bookType";
import { usePostBook } from "../../hooks/usePostBook";

export const PostBook = () => {
  const navigate = useNavigate();
  const { postBook } = usePostBook();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookType>();

  const onSubmitPostBook: SubmitHandler<BookType> = async (data) => {
    await postBook(data);
  };
  const onClickToTop = () => navigate("/");

  return (
    <main className=" flex justify-center">
      <div className=" sm:w-96 w-4/5">
        <h1 className="text-xl font-bold max-w-full mt-8 flex items-center">
          書籍レビュー投稿
        </h1>
        <form onSubmit={handleSubmit(onSubmitPostBook)} className=" w-full flex flex-wrap">
          <input
            type="text"
            placeholder="タイトル"
            className="w-full px-2 py-4 mt-4 rounded-md border"
            {...register("title", {
              required: "必須入力です",
            })}
          />
          <p className=" text-red-500 text-xs h-4">
            {errors.title?.message}&nbsp;
          </p>
          <input
            type="text"
            placeholder="URL"
            className="w-full px-2 py-4 mt-4 rounded-md border"
            {...register("url", {
              required: "必須入力です",
            })}
          />
          <p className=" text-red-500 text-xs h-4">
            {errors.url?.message}&nbsp;
          </p>
          <textarea
            placeholder="説明"
            wrap="soft"
            className="w-full px-2 py-4 mt-4 rounded-md border h-32"
            {...register("detail", {
              required: "必須入力です",
              minLength: {
                value: 10,
                message: "10文字以上で入力してください",
              },
              maxLength: {
                value: 50,
                message: "50文字以下で入力してください",
              },
            })}
          />
          <p className=" text-red-500 text-xs h-4">
            {errors.detail?.message}&nbsp;
          </p>
          <textarea
            placeholder="レビュー"
            wrap="soft"
            className="w-full px-2 py-4 mt-4 rounded-md border h-32"
            {...register("review", {
              required: "必須入力です",
              minLength: {
                value: 10,
                message: "10文字以上で入力してください",
              },
              maxLength: {
                value: 50,
                message: "50文字以下で入力してください",
              },
            })}
          />
          <p className=" text-red-500 text-xs h-4">
            {errors.review?.message}&nbsp;
          </p>
          <button
            type="submit"
            className="px-8 py-2 w-full mb-4 mt-6 text-white bg-green-500 rounded-md"
          >
            投稿する
          </button>
        </form>
        <div className="text-center">
          <p
            className=" text-blue-600 underline m-2 text-xs"
            onClick={onClickToTop}
          >
            ホームへ
          </p>
        </div>
      </div>
    </main>
  );
};
