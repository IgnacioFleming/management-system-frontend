import { API_Status_List, authRedirection } from "../utils/utils";

export default class SalesApiCall {
  static async getAll() {
    try {
      const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/sales`, { credentials: "include" });
      const { status, payload, error, redirectURL } = await result.json();
      if (status === API_Status_List.ERROR) return { status, error };
      if (status === API_Status_List.UNAUTHORIZED) return authRedirection({ redirectURL });
      return payload;
    } catch (error) {
      throw new Error(error);
    }
  }
  static async create(body) {
    try {
      const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/sales`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        credentials: "include",
      });
      const { status, payload, error, redirectURL } = await result.json();

      if (status === API_Status_List.ERROR) return { status, error };
      if (status === API_Status_List.UNAUTHORIZED) return authRedirection({ redirectURL });
      return payload;
    } catch (error) {
      throw new Error(error);
    }
  }
  static async update(id, body) {
    try {
      const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/orders/${id}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const { status, payload, error, redirectURL } = await result.json();
      if (status === API_Status_List.ERROR) return { status, error };
      if (status === API_Status_List.UNAUTHORIZED) return authRedirection({ redirectURL });
      return payload;
    } catch (error) {
      throw new Error(error);
    }
  }
  static async delete(id) {
    try {
      const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/sales/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      const { status, payload, error, redirectURL } = await result.json();
      if (status === API_Status_List.ERROR) return { status, error };
      if (status === API_Status_List.UNAUTHORIZED) return authRedirection({ redirectURL });
      return payload;
    } catch (error) {
      console.log(error);
    }
  }
}
