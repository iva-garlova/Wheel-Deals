import { useContext } from 'react';
import {Link} from 'react-router'
import { userContext } from '../../contexts/userContext';

export default function Navigation() {
    const { email } = useContext(userContext);
    return (
    
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
        <Link className="navbar-brand" to="#page-top">
  <img src="/img/autoparts.webp" alt="Logo" />
       </Link>
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars ms-1"></i>
            </button> */}
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ms-auto d-flex">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/about">About us</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/search">Search</Link></li>
                    {email 
                    ? (
                        <>
                    <li className="nav-item"><Link className="nav-link" to="/products/create">Create</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/logout">Logout</Link></li>
                    </>
                    )
                    : (
                    <>
                        <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
                        </>
                    )
                }
                </ul>
            </div>
        </div>
    </nav>
    );
}