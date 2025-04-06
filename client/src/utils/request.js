const request = async(method, url, data, options = {}) => {
  options.method = method;

  if (data) {
    options.headers = {
      ...options.headers,
      'Content-Type': 'application/json',
    };
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);
  if (!response.ok) {
    const error = await response.json();
    throw error;
  }

  const result = response.status === 204 ? {} : await response.json();
  
  return result;
};
 export default {
    get: request.bind(null, 'GET'),
    post: request.bind(null, 'POST'),
    put: request.bind(null, 'PUT'),
    delete: request.bind(null, 'DELETE'),
 }
