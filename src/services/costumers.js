import { API_Status_List, authRedirection } from "../utils/utils";

export default class CostumersApiCall {
  static async getAll() {
    try {
      const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/costumers`, { credentials: "include" });
      const { status, payload, error, redirectURL } = await result.json();
      if (status === API_Status_List.ERROR) return { status, error };
      if (status === API_Status_List.UNAUTHORIZED) return authRedirection({ redirectURL });

      return payload;
    } catch (error) {
      console.log("Exception throwed ", error);
    }
  }
  static async create(body) {
    try {
      body.account_number = parseInt(body.account_number);
      const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/costumers`, {
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
      console.log("Exception throwed ", error);
    }
  }
  static async update(id, body) {
    try {
      const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/costumers/${id}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const json = await result.json();
      if (json.status === API_Status_List.ERROR) return console.log(json.error);
      if (json.status === API_Status_List.UNAUTHORIZED) return authRedirection({ redirectURL: json.redirectURL });
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
      if (status === API_Status_List.UNAUTHORIZED) return authRedirection({ redirectURL });
      return payload;
    } catch (error) {
      console.log("Exception throwed ", error);
    }
  }
}
