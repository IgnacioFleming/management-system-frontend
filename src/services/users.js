import { API_Status_List, authRedirection } from "../utils/utils";
import ApiCall from "./apiService";

const path = `${import.meta.env.VITE_API_BASE_URL}/api/users`;

export default class UsersApiCall extends ApiCall {
  constructor() {
    super(path);
  }

  static async handleUserState(id) {
    try {
      const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/users/${id}/handleState`, { method: "POST", credentials: "include" });
      const { status, payload, error, redirectURL } = await result.json();
      if (status === API_Status_List.ERROR) return { status, error };
      authRedirection(status, redirectURL);
      return payload;
    } catch (error) {
      throw new Error(error);
    }
  }
}
