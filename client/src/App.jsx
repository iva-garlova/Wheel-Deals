import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Routes, Route} from 'react-router'
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import '/public/styles/styles.css';

function App() {
  return (
    <>
  <Navigation />
  <Routes>
    <Route>
        <Route path='/' element={<Header />}/>
    </Route>
  </Routes>
     </>
  )
}

export default App
