import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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



function App() {
    const [email, setEmail] = useState('');

    const userLoginHandler = (email) => {
        setEmail(email);
    };
  
  return (
    <>
  <Navigation />
  <Routes>
    <Route>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login onLogin={userLoginHandler}/>}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/products/create' element={<CreateProduct />}/>
        <Route path='/products/:productId/details' element={<Details email={email} />}/>
        <Route path='/products/:productId/edit' element={<EditProduct />}/>
        <Route path='/products' element={<Products />}/>
    </Route>
  </Routes>
     </>
  )
}

export default App
