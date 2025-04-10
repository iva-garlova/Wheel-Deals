import { useContext } from "react";
import { userContext } from "../contexts/userContext";
import request from "../utils/request";

export  default  function useAuth()  {
    const authData = useContext(userContext);
  

    const requestWrapper = (method, url, data, options = {}) => {
        const optionWrapper = {
            ...options,
            headers: {
                'X-Authorization': authData.accessToken,
                ...options.headers,
            }
            
        }
        return request.baseRequest(method, url, data, optionWrapper)
    }
    return {
        ...authData,
        request: {
            get: (url, data, options) => requestWrapper('GET', url, data, options),
            post: (url, data, options) => requestWrapper('POST', url, data, options),
            put: (url, data, options) => requestWrapper('PUT', url, data, options),
            delete: (url, data, options) => requestWrapper('DELETE', url, data, options),
        },
    }
}