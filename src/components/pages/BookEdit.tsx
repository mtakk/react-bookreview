import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { BookType } from "../../types/bookType";
import { useEffect, useState } from "react";
import { usePutBook } from "../../hooks/usePutBook";
import { useFetchBook } from "../../hooks/useFetchBook";
import { BookReviewMineType } from "../../types/bookReviewMineType";

export const BookEdit = () => {
  const navigate = useNavigate();
  const bookId = useParams().id as string;
  const { putBook } = usePutBook();
  const { getBook } = useFetchBook();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm<BookType>();

  const location = useLocation();
  const [newBook, setNewBook] = useState<BookType>();

  useEffect(() => {
    if (!newBook) setNewBook(location.state);
    reset({
      title: newBook?.title,
      url: newBook?.url,
      detail: newBook?.detail,
      review: newBook?.review,
    });
    trigger();
  }, [newBook, location.state, reset, trigger]);

  const onSubmitPutBook: SubmitHandler<BookType> = async (data) => {
    if (bookId) await putBook({ id: bookId, ...data });
    const updatedBook = (await getBook(bookId)) ?? ({} as BookReviewMineType);
    const { title, url, detail, review } = updatedBook;
    setNewBook({ title, url, detail, review });
  };
  const onClickToTop = () => navigate("/");

  return (
    <main className=" flex justify-center">
      <div className=" sm:w-96 w-4/5">
        <h1 className="text-xl font-bold max-w-full mt-8 flex items-center">
          書籍レビュー投稿
        </h1>
        <form
          onSubmit={handleSubmit(onSubmitPutBook)}
          className=" w-full flex flex-wrap"
        >
          <input
            id="title"
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
            id="url"
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
            id="detail"
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
            id="review"
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
            更新する
          </button>
        </form>
        <button
          type="submit"
          className="px-8 py-2 w-full mb-4 mt-4 text-white bg-red-500 rounded-md"
        >
          削除する
        </button>
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





    // if (newBook) {
    // const title: HTMLInputElement | null = document.getElementById(
    //   "title"
    // ) as HTMLInputElement;
    // title.value = newBook.title ?? "";
    // const url: HTMLInputElement | null = document.getElementById(
    //   "url"
    // ) as HTMLInputElement;
    // url.value = newBook.url ?? "";
    // const detail: HTMLTextAreaElement | null = document.getElementById(
    //   "detail"
    // ) as HTMLTextAreaElement;
    // detail.value = newBook.detail ?? "";
    // const review: HTMLTextAreaElement | null = document.getElementById(
    //   "review"
    // ) as HTMLTextAreaElement;
    // review.value = newBook.review ?? "";
    // } else {
    //   setNewBook(location.state);
    // }


//const params = useParams();
// const [book, setBook]
// = useState<{ id: number }>(location.state as { id: number })

// const { getBook } = useFetchBook();
// useEffect(() => {
//   const fetchData = async() => {
//     if(params.id) {
//       const book = await getBook(params.id);
//       console.log("本１冊の情報を取得する");
//       console.log(book);

//       const title: HTMLInputElement | null = document.getElementById("title") as HTMLInputElement;
//       title.value = book?.title ?? "";
//       const url: HTMLInputElement | null = document.getElementById("url") as HTMLInputElement;
//       url.value = book?.url ?? "";
//       const detail: HTMLTextAreaElement | null = document.getElementById("detail") as HTMLTextAreaElement;
//       detail.value = book?.detail ?? "";
//       const review: HTMLTextAreaElement | null = document.getElementById("review") as HTMLTextAreaElement;
//       review.value = book?.review ?? "";
//     }
//   };
//   fetchData();
// },[])
