import { FC } from "react";

export const Modal:FC = () => {
  const onClickCloseBtn = () => {
    const dialog: HTMLDialogElement = document.getElementById(
      "dialog"
    ) as HTMLDialogElement;
    dialog.close();
  };
  return (
    <dialog id="dialog" className=" w-96 h-52">
      <div className=" h-44">
        <p id="dialogMessage"></p>
      </div>
      <div>
        <button onClick={onClickCloseBtn}>閉じる</button>
      </div>
    </dialog>
  );
};
