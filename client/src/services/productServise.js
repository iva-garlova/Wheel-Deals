import request from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/products';

export default {
    async getAll(){
        const result = await request.get(baseUrl);
        // const products = Object.values(result);

        return result ? Object.values(result) : [];
    },

    getOne(productId){
        return request.get(`${baseUrl}/${productId}`)
    },
    create(productData){
        return request.post(baseUrl, productData);

    },
    edit(productId, productData){
        return request.put(`${baseUrl}/${productId}`, {...productData, _id:productId})
    },
    delete(productId){
        return request.delete(`${baseUrl}/${productId}`)
    },
};