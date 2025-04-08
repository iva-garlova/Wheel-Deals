import { useEffect, useState } from "react";
import request from "../utils/request";
import  useAuth  from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/products';

export default {
      
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
    const { options } = useAuth();
   
    const create = (productData) => 
         request.post(baseUrl, productData, options)
    
    return {
        create,
    }
}

export const useGetOneProduct = (productId) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
       request.get(`${baseUrl}/${productId}`)
       .then(setProduct)
    }, [productId])

    return {
        product,
    }
}

export const useEditProduct = () => {
    const { options } = useAuth();

    const edit = async (productId, productData) => {
         const response = await request.put(`${baseUrl}/${productId}`, {...productData, _id:productId}, options);
         return response;
        };
        return {
            edit,
        }
    }
