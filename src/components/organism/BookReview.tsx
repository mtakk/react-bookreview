import { FC, memo } from "react";
import "./BookReview.scss";
import { useNavigate } from "react-router-dom";
import { BookReviewType } from "../../types/bookReviewType";
import { BookType } from "../../types/bookType";

type BookReviewMineType = BookReviewType & { isMine: boolean };
type Props = {
  id: string;
  title: string;
  url: string;
  review: string;
  reviewer: string;
  getBook: (id: string) => Promise<void | BookReviewMineType>;
  postBookLog: (selectBookId: string) => Promise<void>;
};

export const BookReview: FC<Props> = memo((props) => {
  const { id, title, url, review, reviewer, getBook, postBookLog } = props;
  const navigate = useNavigate();

  const onClickBookTitle = () => {
    const fetchDate = async () => {
      postBookLog(id);
      const bookMine = (await getBook(id)) ?? ({} as BookReviewMineType);
      const isMine = bookMine.isMine;
      const book: BookType = {
        title: bookMine.title,
        url: bookMine.url,
        detail: bookMine.detail,
        review: bookMine.review,
      };
      isMine
        ? navigate(`/edit/${id}`, { state: book })
        : navigate(`/detail/${id}`, { state: book });
    };
    fetchDate();
  };

  return (
    <div className="card">
      <h2
        className="card__h1 card__h2--size_l card__h2--link"
        onClick={onClickBookTitle}
      >
        {title}
      </h2>
      <p className="card__p card__p--size_s">
        URL:
        <a className="card__a--link" href={url}>
          {url}
        </a>
      </p>
      <p className="card__p card__p--size_m">
        レビュワー：<span>{reviewer}</span>
      </p>
      <p className="card__p card__p--size_m">{review}</p>
    </div>
  );
});

// /** @jsxRuntime classic */
// /** @jsx jsx */
// import { jsx, css } from "@emotion/react";

// const card = css`
//   margin: 20px;
//   width: 400px;
//   height: 280px;
//   border-width: 1px;
//   padding: 12px;
// `;
// const card__title = css`
//   font-size: 1.125rem /* 18px */;
//   line-height: 1.75rem /* 28px */;
//   font-weight: 600;
// `;

// const card__references = css`
//   font-size: 0.875rem /* 14px */;
//   line-height: 1.25rem /* 20px */;
// `;

// const card__url = css`
//   --tw-text-opacity: 1;
//   color: rgb(96 165 250 / var(--tw-text-opacity));
//   text-decoration-line: underline;
// `;

// const card__reviewer = css`
//   font-size: 1rem /* 16px */;
//   line-height: 1.5rem /* 24px */;
// `;

// const card__review = css`
//   font-size: 1rem /* 16px */;
//   line-height: 1.5rem /* 24px */;
// `;

// <div css={card}>
//   <h1 css={card__title}>タイトル</h1>
//   <p css={card__references}>
//     URL:<span css={card__url}>https://xxxxx</span>
//   </p>
//   <p css={card__reviewer}>
//     レビュワー：<span>だれだれ</span>
//   </p>
//   <p css={card__review}>
//     レビュー内容レビュー内容レビュー内容レビュー内容レビュー内容レビュー内容レビュー内容レビュー内容レビュー内容レビュー内容レビュー内容レビュー内容レビュー内容
//   </p>
// </div>
