import api  from "services/api";

async function RegisterProduct(body) {
    try {
        const response = await api.post('product', body);
        console.log(response)
        return response;
    } catch (error) {
        console.log(error);
    }
};

async function GetRegisterProduct() {
    try {
      const response = await api.get('product');
      return response.data; 
    } catch (error) {
      throw error; 
    }
  }

export const ProductEndpoint = {
    GetRegisterProduct,
    RegisterProduct
}