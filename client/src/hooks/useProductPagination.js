import { useEffect, useState } from "react";


export const useProductPagination = (currentPage) => {
    const [pages, setPages] = useState([]);        // Store the products
    const [totalPages, setTotalPages] = useState(1); // Store the total number of pages
    const pageSize = 2;                            // Number of products per page (adjust as needed)
  
    useEffect(() => {
      const fetchProducts = async () => {
        const offset = (currentPage - 1) * pageSize;  // Calculate offset for pagination
        const requestUrl = `http://localhost:3030/data/products?offset=${offset}&pageSize=${pageSize}`;
        
        try {
          const response = await fetch(requestUrl);
          const result = await response.json();
  
          console.log('API Response:', result); // Log the response to verify
  
          if (Array.isArray(result)) {
            setPages(result);  // Set the products in the state
  
            // Calculate totalPages based on the number of products returned
            const totalProducts = result.length; // Get the length of the returned products
            const calculatedTotalPages = Math.ceil(totalProducts / pageSize); // Calculate total pages
            setTotalPages(calculatedTotalPages); // Update totalPages state
          } else {
            console.error("Unexpected response format:", result);
            setPages([]); // If response is not in the expected format, reset pages
            setTotalPages(1); // Set default total pages to 1
          }
        } catch (error) {
          console.error("Error fetching products:", error);
          setPages([]); // Reset pages if there's an error
          setTotalPages(1); // Set default total pages to 1
        }
      };
  
      fetchProducts(); // Fetch products when currentPage changes
    }, [currentPage]); // Re-run the effect whenever currentPage changes
    
    return { pages, totalPages }; // Return the pages and totalPages for pagination
  };