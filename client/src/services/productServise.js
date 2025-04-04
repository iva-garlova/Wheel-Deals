import request from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/products';

export default {
    async getAll(){
        const result = await request.get(baseUrl);
        const products = Object.values(result);

        return products;
    },
    create(productData){
        return request.post(baseUrl, productData);

    },
};