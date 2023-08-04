import { transformAxiosErrorToError } from "@/converter/axios-error-to-error";
import axios from "axios";
import useSWRMutation from "swr/mutation";

const register = async (url: string, { arg }: { arg: User }) => {
  try {
    await axios.post<{ msg: string }>(url, { ...arg });
  } catch (error) {
    throw transformAxiosErrorToError(error as any);
  }
};

const useRegister = () => {
  return useSWRMutation("/api/register", register);
};

export { useRegister };
