import { API_Status_List, authRedirection } from "../utils/utils";

export default class ApiCall {
  constructor(path) {
    this.path = path;
  }

  async getAll() {
    try {
      const result = await fetch(this.path, {
        credentials: "include",
      });
      const { status, payload, error, redirectURL } = await result.json();
      if (status === API_Status_List.ERROR) return { status, error };
      authRedirection(status, redirectURL);
      return payload;
    } catch (error) {
      console.log("Exception throwed, ", error);
    }
  }

  async create(data) {
    try {
      const options = {
        method: "POST",
        credentials: "include",
      };
      if (data instanceof FormData) {
        options.body = data;
      } else {
        options.body = JSON.stringify(data);
        options.headers = { "Content-Type": "application/json" };
      }
      const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/costumers`, options);
      const { status, payload, error, redirectURL } = await result.json();
      if (status === API_Status_List.ERROR) return { status, error };
      authRedirection(status, redirectURL);
      return payload;
    } catch (error) {
      console.log("Exception throwed ", error);
    }
  }
}
