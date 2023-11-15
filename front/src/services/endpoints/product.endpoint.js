import api  from "services/api";

async function RegisterProduct(body) {
    try {
        const response = await api.post('product/', body);
        console.log(response)
        return response;
    } catch (error) {
        console.log(error);
    }
};

async function
    GetRegisterProduct(body) {
    try {
        const response = await api.get('product/');
        console.log(response)
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const ProductEndpoint = {
    GetRegisterProduct,
    RegisterProduct
}