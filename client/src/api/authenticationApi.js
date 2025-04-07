import { useContext, useEffect, useRef } from "react";
import request from "../utils/request";
import { userContext } from "../contexts/userContext";

const baseUrl = 'http://localhost:3030/users';
export const useLogin = () => {
    const abortRef = useRef(new AbortController);
   

    const login = async(email, password) => {
     const result = await request.post(
        `${baseUrl}/login`, 
        {email, password}, 
        {signal: abortRef.current.signal}
    );

     return result;
    }

    useEffect(() =>{
     const AbortController = abortRef.current;
     return () => AbortController.abort();
    }, []);
    return{
        login,
    }
};

export const useRegister = () => {
    const  register = (email, password) => {
      return request.post(`${baseUrl}/register`, {email, password})
    }
    return {
        register,
    }
};

export const useLogout = () => {
    const { accessToken } = useContext(userContext);
    const options = {
        headers: {
            'X-Authorization': accessToken
        }
    }
     const logout = () => request.get(`${baseUrl}/logout`, null, options);

     return {
        logout,
     }
};