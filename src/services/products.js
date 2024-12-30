export default class ProductsApiCall {
  static async getAll() {
    try {
      const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products`);
      const { status, payload, error } = await result.json();
      if (status !== "success") return { status, error };
      return payload;
    } catch (error) {
      throw new Error(error);
    }
  }
  static async create(body) {
    try {
      const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const { status, payload, error } = await result.json();
      if (status !== "success") return { status, error };
      return payload;
    } catch (error) {
      throw new Error(error);
    }
  }
}
