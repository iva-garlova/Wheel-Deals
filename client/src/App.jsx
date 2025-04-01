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

function App() {
  return (
    <>
  <Navigation />
  <Routes>
    <Route>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/products/create' element={<CreateProduct />}/>
        <Route path='/products/edit' element={<EditProduct />}/>
        <Route path='/products' element={<Products />}/>
    </Route>
  </Routes>
     </>
  )
}

export default App
