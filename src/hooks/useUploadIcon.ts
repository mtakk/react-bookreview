import { useCallback } from "react";
import { axios } from "../api/axios";
import { UploadIcon } from "../types/uploadIcon";
import { ApiError } from "../types/apiError";

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
        const error = res?.response?.data as ApiError;
        throw error;
      })
      .finally(() => console.log("処理終了"));
  }, []);
  return { postUploads };
};
