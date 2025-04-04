import { useEffect, useState } from "react";
import productServise from "../../services/productServise";
import ProductItem from "./procut-catalog-item/ProductItem";

export default function Products() {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        productServise.getAll()
        .then(setProduct);
    }, [])

    console.log(products);
    
    return (
        <section className="page-section bg-light" id="portfolio">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Our Products</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            {products.map(product => <ProductItem key={product._id}{...product}/>)}
       
        </div>
    </section>
    );
}