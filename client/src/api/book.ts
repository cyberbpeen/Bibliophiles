import axios, { AxiosError } from "axios";
import { BaseResponse, requestHandler } from "@/api/request-handler";
import { Book } from "@/types/book";
import { GenreRequest, Genre } from "@/types/genre";

type GetBooksParams = {
  limit?: number;
  page?: number;
};

export const getBooks = requestHandler<GetBooksParams, Book[]>((params) =>
  axios.get("http://localhost:3000/api/v1/books", { params })
);

// Post Genre
export const postGenre = async <V, E = AxiosError>({
  title,
  descriptions,
}: GenreRequest): BaseResponse<V, E> => {
  try {
    const response = await axios.post(`http://localhost:3000/api/v1/genres`, {
      title,
      descriptions,
    });
    return { code: "success", data: response.data };
  } catch (error) {
    return { code: "error", error: error as E };
  }
};

export const getGenres = requestHandler<GetBooksParams, Genre[]>((params) =>
  axios.get("http://localhost:3000/api/v1/genres", { params })
);

export const putGenre = async <V, E = AxiosError>({
  id,
  title,
  descriptions,
}: Genre): BaseResponse<V, E> => {
  try {
    const response = await axios.put(
      `http://localhost:3000/api/v1/genres/${id}`,
      {
        title,
        descriptions,
      }
    );
    return { code: "success", data: response.data };
  } catch (error) {
    return { code: "error", error: error as E };
  }
};

export const deleteGenre = async <V, E = AxiosError>(
  id: string
): BaseResponse<V, E> => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/v1/genres/${id}`
    );
    return { code: "success", data: response.data };
  } catch (error) {
    return { code: "error", error: error as E };
  }
};
