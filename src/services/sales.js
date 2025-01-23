export default class SalesApiCall {
  static async getAll() {
    try {
      const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/sales`);
      const { status, payload, error } = await result.json();
      if (status !== "success") return { status, error };
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
      });
      const { status, payload, error } = await result.json();

      if (status !== "success") return { status, error };
      console.log(payload);
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
      });
      const json = await result.json();
      if (json.status === "error") return console.log(json.error);
      return json.payload;
    } catch (error) {
      throw new Error(error);
    }
  }
  static async delete(id) {
    try {
      const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/orders/${id}`, {
        method: "DELETE",
      });
      const json = await result.json();
      if (json.status === "error") return console.log(json.error);

      return json;
    } catch (error) {
      console.log(error);
    }
  }
}
