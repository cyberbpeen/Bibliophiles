import axios, { AxiosError } from "axios";
import { BaseResponse } from "./request-handler";

interface User {
  name: string;
  email: string;
  password: string;
}

export const loginRegister = async <V, E = AxiosError>(
  { name, email, password }: User,
  type: string
): BaseResponse<V, E> => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/v1/auth/${type}`,
      {
        name,
        email,
        password,
      }
    );
    return { code: "success", data: response.data };
  } catch (error) {
    return { code: "error", error: error as E };
  }
};
