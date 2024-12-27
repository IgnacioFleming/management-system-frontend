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
}
