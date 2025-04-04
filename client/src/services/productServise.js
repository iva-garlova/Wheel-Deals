import request from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/products';

export default {
    getAll(){
        return request.get(baseUrl);
    },
    create(productData){
        return request.post(baseUrl, productData);
    },
};