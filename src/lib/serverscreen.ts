import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export const useFetchData = () => {
  return useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return response.data;
    },
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};

// lib/getFetchData.ts

export const getFetchData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return { data: response.data, error: null };
  } catch (error) {
    console.error("Error fetching data:", error);

    // Optional: You can return a consistent error object or throw a custom error
    return {
      data: [],
      error:
        (error as AxiosError)?.response?.data ||
        "An unexpected error occurred.",
    };
  }
};
