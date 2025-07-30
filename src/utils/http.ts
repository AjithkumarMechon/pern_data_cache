import axios from "axios";
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

export class HTTP {
  static async doGet(url: string) {
    return await axios.get(url, config());
  }
  static async doPost(url: string, value: unknown) {
    return await axios.post(url, value, config());
  }
  static async doDelete(url: string) {
    return await axios.delete(url, config());
  }
}

export const secretkey = "key";
