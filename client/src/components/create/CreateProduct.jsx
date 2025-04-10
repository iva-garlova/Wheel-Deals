import { useNavigate } from 'react-router';
import { useCreateProduct } from '../../api/productApi';

export default function CreateProduct() {
    const navigate = useNavigate();
    const { create } = useCreateProduct();

    const submitAction = async (event) => {
        event.preventDefault(); 
        
        const formData = new FormData(event.target); 
        
       
        const productData = Object.fromEntries(formData);

        try {
           
            await create(productData);
          
            navigate('/products');
        } catch (error) {
            console.error('Error creating product:', error);
            
        }
    }

    return (
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Create New Post</h2>
                    <h3 className="section-subheading text-muted">Give your details below.</h3>
                </div>

                <form id="contactForm" onSubmit={submitAction}>
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    id="name"
                                    name="title"
                                    type="text"
                                    placeholder="Product Name *"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    id="imageUrl"
                                    name="imageUrl"
                                    type="text"
                                    placeholder="Image *"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    id="type"
                                    name="type"
                                    type="text"
                                    placeholder="Type *"
                                    required
                                />
                            </div>
                            <div className="form-group mb-md-0">
                                <input
                                    className="form-control"
                                    id="price"
                                    name="price"
                                    type="text"
                                    placeholder="Price *"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                <textarea
                                    className="form-control"
                                    id="description"
                                    name="description"
                                    placeholder="Description *"
                                    required
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center text-white mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                        </div>
                    </div>
                    <div className="d-none" id="submitErrorMessage">
                        <div className="text-center text-danger mb-3">Error creating post!</div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary btn-xl text-uppercase" type="submit">
                            Save & Create
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}