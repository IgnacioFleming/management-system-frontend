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
}
