import { API_Status_List, authRedirection } from "../utils/utils";

export default class ProductsApiCall {
  static async getAll() {
    try {
      const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products`, { credentials: "include" });
      const { status, payload, error, redirectURL } = await result.json();
      if (status === API_Status_List.ERROR) return { status, error };
      authRedirection(status, redirectURL);
      return payload;
    } catch (error) {
      throw new Error(error);
    }
  }
  static async create(body) {
    try {
      body.price = parseFloat(body.price);
      body.stock = parseInt(body.stock);
      const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        credentials: "include",
      });
      const { status, payload, error, redirectURL } = await result.json();

      if (status === API_Status_List.ERROR) return { status, error };
      authRedirection(status, redirectURL);

      return payload;
    } catch (error) {
      throw new Error(error);
    }
  }
  static async update(id, body) {
    try {
      const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products/${id}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const json = await result.json();
      if (json.status === API_Status_List.ERROR) return console.log(json.error);
      authRedirection(json.status, json.redirectURL);

      return json.payload;
    } catch (error) {
      throw new Error(error);
    }
  }
  static async delete(id) {
    try {
      const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      const json = await result.json();
      if (json.status === API_Status_List.ERROR) return console.log(json.error);
      authRedirection(json.status, json.redirectURL);
      return json;
    } catch (error) {
      console.log(error);
    }
  }
}
