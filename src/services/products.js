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
      body.price = parseFloat(body.price);
      body.stock = parseInt(body.stock);
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
  static async update(id, body) {
    try {
      const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products/${id}`, {
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
}
