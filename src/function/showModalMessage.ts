export const showModalMessage = (message: string) => {
  const messageArea: HTMLElement = document.getElementById(
    "dialogMessage"
  ) as HTMLElement;
  messageArea.innerText = message;

  const dialog: HTMLDialogElement = document.getElementById(
    "dialog"
  ) as HTMLDialogElement;
  dialog.showModal();
};
