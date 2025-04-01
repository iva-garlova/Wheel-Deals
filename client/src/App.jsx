import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Routes, Route} from 'react-router';
import './styles/styles.css'
import Home from "./components/header/Home";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <>
  <Navigation />
  <Routes>
    <Route>
        <Route path='/' element={<Home />}/>
    </Route>
  </Routes>
     </>
  )
}

export default App
