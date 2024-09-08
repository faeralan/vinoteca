const API_BASE_URL = 'https://66de1452f7bcc0bbdcdfc6a9.mockapi.io/api/v1';

const handleError = async (response) => {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error ${response.status}: ${errorText}`);
  }
  return response.json();
};

export const apiService = {
  getCategory: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/category`);
      return handleError(response);
    } catch (error) {
      console.error('Error fetching items:', error);
      throw error;
    }
  },

  getCategoryById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/category/${id}`);
      return handleError(response);
    } catch (error) {
      console.error(`Error fetching item ${id}:`, error);
      throw error;
    }
  },

  getProduct: async (categoryId) => {
    try {
      let response;
      if(categoryId === undefined || categoryId === null){
        response = await fetch(`${API_BASE_URL}/product`);
      }else{
        response = await fetch(`${API_BASE_URL}/category/${categoryId}/product`);
      }
      return handleError(response);
    } catch (error) {
      console.error('Error fetching items:', error);
      throw error;
    }
  },

  getProductById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/product/${id}`);
      return handleError(response);
    } catch (error) {
      console.error(`Error fetching item ${id}:`, error);
      throw error;
    }
  },
};