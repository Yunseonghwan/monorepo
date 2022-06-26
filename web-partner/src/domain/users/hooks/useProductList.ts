import { callApi } from "@/common/api/api";
import { useQuery } from "react-query";

export const useUserList = (form: any) => {
  return useQuery(
    "dataList",
    async () => await callApi("get", "/sdad", null, form)
  );
};
