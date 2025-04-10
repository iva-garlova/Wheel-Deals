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


export const useCreateProduct = () => {
    const { request } = useAuth();  

    const create = (productData) => {
        
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


export const useGetOneProduct = (productId) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
       
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

// export const useProductPagination = () => {
//     const [pages, setPages] = useState([]);

//     useEffect(() => {
//         const params = new URLSearchParams({
//             sortBy: '_createdOn desc',
//             pageSize: 3,
//         });

//         request.get(`${baseUrl}?${params.toString()}`)
//         .then(setPages)
//     }, []);
//     return { pages };
// }
export const getPaginated = (offset, pageSize) => {
    return request.baseRequest('GET', `/data/products?offset=${offset}&pageSize=${pageSize}`)
      .then(result => {
        return {
          products: result.products, // Assuming the response includes the products list
          totalPages: result.totalPages, // Assuming the response includes the total pages
          totalCount: result.totalCount, // Assuming the response includes the total count of products
        };
      });
  };