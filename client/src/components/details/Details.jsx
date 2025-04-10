import { Link, useNavigate, useParams } from "react-router";
import { useDeleteProduct, useGetOneProduct } from "../../api/productApi";


export default function Details() {

    const navigate = useNavigate();
    const { productId } = useParams();
    const { product } = useGetOneProduct(productId);
    const { deleteProduct } = useDeleteProduct();


    const productDeleteClickHandler = async() => {
        const hasConfirm = confirm(`Are you sure you want to delete ${product.title}?`);

        if(!hasConfirm){
            return
        }
       
        await deleteProduct(productId)
        
        navigate('/products')
    };
   
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
                               
                                <Link to={`/products/${productId}/edit`} className="btn btn-primary btn-xl text-uppercase">
                                  <i className="fas fa-xmark me-1"></i>
                                        Edit
                               </Link>
                        
                                <button onClick={productDeleteClickHandler}
                                className="btn  btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                   
                                    <i className="fas fa-xmark me-1"></i>
                            
                                    Delete
                                

                                </button>
                            </div>
                        </div>
                    </div>
                </div>



    );
}