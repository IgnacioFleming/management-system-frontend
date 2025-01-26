export default class SessionsApiCall {
  static async register(user) {
    try {
      const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/sessions/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(result);
      if (result.ok) {
        const response = result.json();
        return response;
      }
    } catch (error) {
      return new Error(error);
    }
  }
  static async login(credentials) {
    try {
      const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/sessions/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      console.log(result);
      if (result.ok) {
        const response = result.json();
        return response;
      }
    } catch (error) {
      return new Error(error);
    }
  }
}
