import { useEffect, useState } from "react";
import  useAuth  from "../hooks/useAuth";
import request from "../utils/request";

const baseUrl = 'http://localhost:3030/data/products';



export const useGetAllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // Using the request directly from utils
        request.get(baseUrl)
            .then(response => {
                if (response) {
                    setProducts(response);
                } else {
                    console.error("No products found");
                }
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return { products };
};

// Hook to create a product
export const useCreateProduct = () => {
    const { request } = useAuth();  // You may use the `request` from useAuth if needed

    const create = (productData) => {
        // Ensure this is the correct URL and method, and handle response and errors
        return request.post(baseUrl, productData)
            .then(response => {
                console.log("Product created successfully:", response);
            })
            .catch(error => {
                console.error("Error creating product:", error);
            });
    };

    return { create };
};

// Hook to fetch a single product by ID
export const useGetOneProduct = (productId) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        // Using request directly here as well
        request.get(`${baseUrl}/${productId}`)
            .then(response => {
                if (response) {
                    setProduct(response);
                } else {
                    console.error("Product not found");
                }
            })
            .catch(error => {
                console.error("Error fetching product:", error);
            });
    }, [productId]);

    return { product };
};

// Hook to edit a product
export const useEditProduct = () => {
    const { request } = useAuth();

    const edit = (productId, productData) => {
        return request.put(`${baseUrl}/${productId}`, { ...productData, _id: productId })
            .then(response => {
                console.log("Product edited successfully:", response);
            })
            .catch(error => {
                console.error("Error editing product:", error);
            });
    };

    return { edit };
};

// Hook to delete a product
export const useDeleteProduct = () => {
    const { request } = useAuth();

    const deleteProduct = (productId) => {
        return request.delete(`${baseUrl}/${productId}`)
            .then(response => {
                console.log("Product deleted successfully:", response);
            })
            .catch(error => {
                console.error("Error deleting product:", error);
            });
    };

    return { deleteProduct };
};