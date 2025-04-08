import { useContext, useEffect, useState } from "react";
import request from "../utils/request";
import { userContext } from "../contexts/userContext";

const baseUrl = 'http://localhost:3030/data/products';

export default {

    getOne(productId){
        return request.get(`${baseUrl}/${productId}`)
    },
   
    edit(productId, productData){
        return request.put(`${baseUrl}/${productId}`, {...productData, _id:productId})
    },
    delete(productId){
        return request.delete(`${baseUrl}/${productId}`)
    },
};

export const useGetAllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        request.get(baseUrl)
        .then(setProducts)
    }, []);

    return {
        products,
    };
}

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