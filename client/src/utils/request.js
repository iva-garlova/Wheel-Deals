 const request = async(method, url, data, options = {}) => {
  console.log(url);
  options.method = method;

  if (data) {
    options = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(data),
    };
    
  }
  try {
    const response = await fetch(url, options);
    const responseContentType = response.headers.get('Content-Type');
    if(!responseContentType){
      return;
    }
    
    if (!response.ok) {
      const error = await response.json();
      throw error;
    }
    
  
    const result = response.status === 204 ? {} : await response.json();
    
    return result;
  } catch (error){
    console.error('Request Failed', error)
  }

};
 export default {
    get: request.bind(null, 'GET'),
    post: request.bind(null, 'POST'),
    put: request.bind(null, 'PUT'),
    delete: request.bind(null, 'DELETE'),
    baseRequest: request,
 }
