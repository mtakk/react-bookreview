import { FC, useEffect, useState } from "react";
import { BookReview } from "../organism/BookReview";
import { useFetchBooks } from "../../hooks/useFetchBooks";
import { BookReviewType } from "../../types/bookReviewType";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import "./Home.scss";
import { Pagination } from "../organism/Pagination";
import { useFetchBook } from "../../hooks/useFetchBook";
import { useBookLog } from "../../hooks/useBookLog";

export const Home: FC = () => {
  const [bookReviews, setBookReviews] = useState<Array<BookReviewType>>([]);
  const { getBooks } = useFetchBooks();
  const { getBook } = useFetchBook();
  const { postBookLog } = useBookLog();
  const pageNumber = useSelector((state: RootState) => state.pageNumber.value);

  useEffect(() => {
    const fetchData = async () => {
      const result = (await getBooks(pageNumber * 10)) ?? [];
      setBookReviews(result);
    };
    fetchData();
  }, [getBooks, pageNumber]);

  return (
    <div className="home-container">
      {bookReviews.map((bookReview, key) => (
        <BookReview
          key={key}
          id={bookReview.id}
          title={bookReview.title}
          url={bookReview.url}
          review={bookReview.review}
          reviewer={bookReview.reviewer}
          getBook={getBook}
          postBookLog={postBookLog}
        />
      ))}
      <Pagination pageNumber={pageNumber} />
    </div>
  );
};

// tailwind CSS vs Emotion
// 個人的見解
// コンポーネント化がどんどんできるUIならtailwind CSS、UIの使い回しが難しくオーダーメイドのパーツが多い画面ならEmotion,StyledComponent
// 理由
// tailwind CSSの方がシンプルにcssの文量は少ない、テンプレートリテラル{``}で囲めば横長にならない、タグに直接なのでhtmlはすっきりしない
// Emotion,StyledComponentは、cssは減らない、htmlときっちり分離できる、コンポーネントの分離が難しい場合でも、1つのファイル内でsassの記法で何でも書ける

// /** @jsxRuntime classic */
// /** @jsx jsx */
// import { jsx, css } from "@emotion/react";
// const container = css`
//   margin-left: auto;
//   margin-right: auto;
//   margin-top: 1.5rem /* 24px */;
//   margin-bottom: 1.5rem /* 24px */;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   @media (min-width: 640px) {
//     max-width: 640px;
//   }
//   @media (min-width: 768px) {
//     max-width: 768px;
//   }
//   @media (min-width: 1024px) {
//     max-width: 1024px;
//   }
//   @media (min-width: 1280px) {
//     max-width: 1280px;
//   }
//   @media (min-width: 1536px) {
//     max-width: 1536px;
//   }
// `;
// <div css={container}>
