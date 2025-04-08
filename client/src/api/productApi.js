import { useContext } from "react";
import request from "../utils/request";
import { userContext } from "../contexts/userContext";

const baseUrl = 'http://localhost:3030/data/products';

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

export const useCreateProduct = () => {
    const { accessToken } = useContext(userContext);

    const options = {
        headers: {
            'X-Authorization': accessToken,
        }
    }
    const create = (productData) => 
         request.post(baseUrl, productData, options)
    
    return {
        create,
    }
}