import { useLocation, useNavigate } from "react-router-dom";
import { BookType } from "../../types/bookType";

export const BookDetail = () => {
  const navigate = useNavigate();
  const onClickToTop = () => navigate("/");
  const location = useLocation();

  const book: BookType = location.state;
  const { title, url, detail, review } = book;

  return (
    <main className=" flex justify-center">
      <div className=" w-4/5">
        <h1 className="text-xl font-bold max-w-full mt-8 flex items-center">
          書籍レビュー
        </h1>
        <div className=" w-full flex flex-wrap">
          <h2 id="title" className="w-full px-2 py-4 mt-4">
            {title}
          </h2>
          <p id="url" className=" w-full px-2 py-4 mt-4">
            URL
            <br />
            <a
              href={url}
              className=" w-full inline-block truncate break-words text-blue-400 underline"
            >
              {url}
            </a>
          </p>
          <p id="detail" className="w-full px-2 py-4 mt-4 h-auto">
            詳細:
            <br />
            {detail}
          </p>
          <p id="review" className="w-full px-2 py-4 mt-4 h-auto">
            レビュー:
            <br />
            {review}
          </p>
        </div>
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

// useEffect(() => {
//   if (book) {
//     console.log("navigateの引数を使う");
//     const url: HTMLInputElement | null = document.getElementById(
//       "url"
//     ) as HTMLInputElement;
//     url.value = book.url ?? "";
//     const detail: HTMLTextAreaElement | null = document.getElementById(
//       "detail"
//     ) as HTMLTextAreaElement;
//     detail.value = book.detail ?? "";
//     const review: HTMLTextAreaElement | null = document.getElementById(
//       "review"
//     ) as HTMLTextAreaElement;
//     review.value = book.review ?? "";
//   }
// }, [book]);
