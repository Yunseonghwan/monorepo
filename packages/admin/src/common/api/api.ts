import axios from "axios";

export const callApi = (
  method: string,
  path: string,
  data?: any,
  params?: any
) => {
  const headers = {
    "content-type": "application/json",
  };

  const baseUrl = process.env.REACT_APP_API;
  const fullUrl = `${baseUrl}${path}`;

  if (method === "get" || method === "delete") {
    return axios[method](fullUrl, { headers, params });
  } else if (method === "post" || method === "put") {
    return axios[method](fullUrl, data, { headers });
  }
};
