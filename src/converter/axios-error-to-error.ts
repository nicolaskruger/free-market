import { AxiosError } from "axios";

const transformAxiosErrorToError = (
  axiosError: AxiosError<{ msg: string }>
) => {
  return new Error(axiosError.response?.data.msg);
};

export { transformAxiosErrorToError };
