import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { userContext } from "./contexts/userContext";

import { Routes, Route} from 'react-router';
import './styles/styles.css'
import Home from "./components/header/Home";
import Navigation from "./components/navigation/Navigation";
import Login from "./components/login/login";
import Register from "./components/register/Register";
import CreateProduct from "./components/create/CreateProduct";
import EditProduct from "./components/edit/EditProduct";
import Products from "./components/products/Products";
import Details from "./components/details/Details";
import { useState } from "react";
import Logout from "./components/logout/Logout";



function App() {
    const [authData, setAuthData] = useState({});

    const userLoginHandler = (resultData) => {
        setAuthData(resultData);
    };
  
  return (
    <userContext.Provider value={{...authData, userLoginHandler}}>
    <>
  <Navigation />
  <Routes>
    <Route>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/logout' element={<Logout />}/>
        <Route path='/products/create' element={<CreateProduct />}/>
        <Route path='/products/:productId/details' element={<Details />}/>
        <Route path='/products/:productId/edit' element={<EditProduct />}/>
        <Route path='/products' element={<Products />}/>
    </Route>
  </Routes>
     </>
     </userContext.Provider>
  )
}

export default App
