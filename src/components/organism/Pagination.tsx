import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { setPageNumber } from "../../redux/pageNumberSlice";
import "./Pagination.scss";

type Props = {
  pageNumber: number;
};

export const Pagination: FC<Props> = memo((props) => {
  const { pageNumber } = props;
  const dispatch = useDispatch();
  const onclickPageBack = () => {
    dispatch(setPageNumber(pageNumber - 1));
  };
  const onclickPageForward = () => {
    dispatch(setPageNumber(pageNumber + 1));
  };

  return (
    <ul className="pagination">
      <li
        className={`pagination__li pagination__li--spacing ${
          pageNumber < 1 ? "pagination__li--hidden" : ""
        }`}
        onClick={onclickPageBack}
      >
        ＜
      </li>
      <li
        className="pagination__li pagination__li--spacing"
        onClick={onclickPageForward}
      >
        ＞
      </li>
    </ul>
  );
});
