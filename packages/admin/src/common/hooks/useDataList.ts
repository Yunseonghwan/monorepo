import { useQuery } from "react-query";
import { callApi } from "../api/api";

export const useDataList = (form: any) => {
  return useQuery(
    "dataList",
    async () => await callApi("get", "/sdad", null, form)
  );
};
