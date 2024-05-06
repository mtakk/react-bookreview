import { useCallback } from "react";
import { axios } from "../api/axios";
import { UploadIcon } from "../types/uploadIcon";
import { showModalMessage } from "../function/showModalMessage";

export const useUploadIcon = () => {
  const postUploads = useCallback(async (props: UploadIcon) => {
    const headers = {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${props.authorization}`,
    };
    return axios
      .post("/uploads", { icon: props.icon }, { headers })
      .then((res) => {
        console.log("アイコンアップロード成功");
        console.log(res);
      })
      .catch((res) => {
        console.log("登録に失敗しました。" + res);
        showModalMessage("アップロードに失敗しました。");
      })
      .finally(() => console.log("登録終了"));
  }, []);
  return { postUploads };
};
