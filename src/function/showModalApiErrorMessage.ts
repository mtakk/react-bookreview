import { ApiError } from "../types/apiError";

export const showModalApiErrorMessage = (error: ApiError) => {
  const messageArea: HTMLElement = document.getElementById(
    "dialogMessage"
  ) as HTMLElement;
  messageArea.innerText = `${error?.ErrorMessageJP}[Error Code:${error?.ErrorCode}]`;

  const dialog: HTMLDialogElement = document.getElementById(
    "dialog"
  ) as HTMLDialogElement;
  dialog.showModal();
};
