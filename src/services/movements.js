import { API_Status_List, authRedirection } from "../utils/utils";

export default class MovementsApiCall {
  static async getById(costumer_id) {
    try {
      const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/movements/${costumer_id}`, { credentials: "include" });
      if (result.ok) {
        const { status, payload, error, redirectURL } = await result.json();
        console.log(status);
        if (status === API_Status_List.ERROR) return { status, error };
        authRedirection(status, redirectURL);
        return payload;
      } else {
        return { status: API_Status_List.ERROR, error: "There was an error on the query" };
      }
    } catch (error) {
      console.log(error);
    }
  }
}
