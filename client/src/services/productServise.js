const baseUrl = 'http://localhost:3030/jsonstore/products';

export default {
   async create(productData){
       const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData);
       });
       
       const result = await response.json();

       return result;
    }
};