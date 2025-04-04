import { useEffect, useState } from "react";
import { useParams } from "react-router";
import productServise from "../../services/productServise";

export default function Details() {
    const [product, setProduct] = useState({})
    const {productId} = useParams();

    useEffect(() => {
        (async() => {
            const result = await productServise.getOne(productId);
            setProduct(result);
        })()
    }, [productId]);
   
    return (
       
       
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="modal-body">
                                {/* <!-- Project details--> */}
                                <h2 className="text-uppercase">{product.title}</h2>
                                <p className="item-intro text-muted">{product.type}</p>
                                <img className="img-fluid" src={product.imageUrl} alt="Product image" />
                                <p>{product.description}</p>
                                <ul className="list-inline">
                                    <li>
                                        <strong>Name:</strong>
                                        {product.title}
                                    </li>
                                    <li>
                                        <strong>Price:</strong>
                                        {product.price}
                                    </li>
                                </ul>
                                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i className="fas fa-xmark me-1"></i>
                                    Edit
                                </button>
                                <button className="btn  btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i className="fas fa-xmark me-1"></i>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>



    );
}