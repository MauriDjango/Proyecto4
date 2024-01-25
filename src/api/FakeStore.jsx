

class Store {

  async getAll() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  async getById(id) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
}

export const store = new Store;
