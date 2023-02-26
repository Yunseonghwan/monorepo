import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

const onRequest = (config: any): AxiosRequestConfig => {
  //요청보낼때 headers 객체 추가
  config.headers["Authorization"] = `Bearer ${localStorage.getItem(
    "accesstoken"
  )}`;
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  // 요청 error return
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  // api 응답
  return response;
};

const onResponseError = async (error: any): Promise<AxiosError> => {
  if (error.response) {
    //액세스토큰 만료 됐을때 들어오는 error 조건 처리
    if (
      error.response.status === 401 &&
      error.response.data.errorMessage === "엑세스 토큰이 만료되었습니다."
    ) {
      try {
        const { data } = await axios.post(``, null, {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
          },
          params: {
            RefreshToken: `Bearer ${localStorage.getItem("refreshtoken")}`,
          },
        });

        const { accessToken } = data;

        localStorage.setItem("accesstoken", JSON.stringify(accessToken));
        location.reload();
      } catch (_error) {
        if (_error) {
          localStorage.clear();
          location.reload();
        }
        return Promise.reject(_error);
      }
    }
  }
  return Promise.reject(error);
};

const setupInterceptorsTo = (axiosInstance: AxiosInstance): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};

export const api = setupInterceptorsTo(
  axios.create({
    baseURL: "",
    headers: {
      "Content-Type": "application/json",
    },
  })
);
