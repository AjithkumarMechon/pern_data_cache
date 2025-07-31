import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";

const config = () => {
  const token = Cookies.get("token");
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "", // Ensure token is valid
    },
  };
};

const baseURL: string = process.env.API_BASE_URL ?? "http://localdev:3000";
export class HTTP {
  static async doGet<T>(url: string): Promise<AxiosResponse<T>> {
    return await axios.get(`${baseURL}${url}`, config());
  }
  static async doPost<T>(
    url: string,
    value: unknown
  ): Promise<AxiosResponse<T>> {
    return axios.post<T>(`${baseURL}${url}`, value, config());
  }

  static async doPut<T>(
    url: string,
    value: unknown
  ): Promise<AxiosResponse<T>> {
    return axios.put<T>(`${baseURL}${url}`, value, config());
  }

  static async doDelete<T>(url: string): Promise<AxiosResponse<T>> {
    return await axios.delete(`${baseURL}${url}`, config());
  }
}

export const secretkey = "key";
