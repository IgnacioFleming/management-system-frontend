import { API_Status_List, authRedirection } from "../utils/utils";
import ApiCall from "./apiService";

const path = `${import.meta.env.VITE_API_BASE_URL}/api/costumers`;
export default class CostumersApiCall extends ApiCall {
  constructor() {
    super(path);
  }
  // static async getAll() {
  //   try {
  //     const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/costumers`, { credentials: "include" });
  //     const { status, payload, error, redirectURL } = await result.json();
  //     if (status === API_Status_List.ERROR) return { status, error };
  //     authRedirection(status, redirectURL);

  //     return payload;
  //   } catch (error) {
  //     console.log("Exception throwed ", error);
  //   }
  // }
  static async create(formData) {
    try {
      const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/costumers`, {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      const { status, payload, error, redirectURL } = await result.json();
      if (status === API_Status_List.ERROR) return { status, error };
      authRedirection(status, redirectURL);
      return payload;
    } catch (error) {
      console.log("Exception throwed ", error);
    }
  }
  static async update(id, formData) {
    try {
      const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/costumers/${id}`, {
        method: "PUT",
        body: formData,
        credentials: "include",
      });
      const json = await result.json();
      if (json.status === API_Status_List.ERROR) return console.log(json.error);
      authRedirection(json.status, json.redirectURL);
      return json.payload;
    } catch (error) {
      console.log("Exception throwed ", error);
    }
  }

  static async delete(id) {
    try {
      const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/costumers/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      const { status, payload, error, redirectURL } = await result.json();
      if (status === API_Status_List.ERROR) return { status, error };
      authRedirection(status, redirectURL);
      return payload;
    } catch (error) {
      console.log("Exception throwed ", error);
    }
  }
}
