import axios from "axios";
interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  name?: string;
}

export const getProducts = async (
  url: string
): Promise<{
  data: ProductProps[] | { data: ProductProps[] };
  error: string | null;
}> => {
  const baseUrl: string = process.env.API_BASE_URL ?? "http://localdev:3000";
  try {
    const response = await axios.get<ProductProps[]>(`${baseUrl}${url}`);
    return {
      data: response.data,
      error: null,
    };
  } catch (error) {
    const message = axios.isAxiosError(error)
      ? error.message
      : "An unexpected error occurred";
    return {
      data: [],
      error: message,
    };
  }
};

// /lib/postProductData.ts
interface ProductResponse extends ProductProps {
  id: number;
}

export const postProductData = async (
  url: string,
  payload: Omit<ProductProps, "id">
  // payload: Partial<Product>
): Promise<{
  data: ProductResponse | null;
  error: string | null;
}> => {
  try {
    const response = await axios.post(url, payload);
    return {
      data: response.data,
      error: null,
    };
  } catch (error) {
    const message = axios.isAxiosError(error)
      ? error.message
      : "An unexpected error occurred";
    return {
      data: null,
      error: message,
    };
  }
};
