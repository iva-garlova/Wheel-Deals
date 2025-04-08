
import { useNavigate, useParams } from "react-router";

import { useEditProduct, useGetOneProduct } from "../../api/productApi";

export default function EditProduct() {

    const navigate = useNavigate();
    const { productId } = useParams();
    const { edit } = useEditProduct(); // Use the hook to get the edit function
    const {product} = useGetOneProduct(productId);

   

    const formAction = async(formData) => {
       const productData = Object.fromEntries(formData);

       await edit(productId, productData);

       navigate(`/products/${productId}/details`)
    }


    return (
        <section className="page-section" id="contact">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Edit your Post</h2>
                <h3 className="section-subheading text-muted">Change your details below.</h3>
            </div>

            <form id="contactForm" action={formAction} data-sb-form-api-token="API_TOKEN">
                <div className="row align-items-stretch mb-5">
                    <div className="col-md-6">
                        <div className="form-group">
                            {/* <!-- Product Name input--> */}
                            <input className="form-control" id="name" name="title" type="text" defaultValue={product.title} placeholder="Product Name *" data-sb-validations="required" />
                            <div className="invalid-feedback" data-sb-feedback="name:required">A product name is required.</div>
                        </div>
                        <div className="form-group">
                           
                            <input className="form-control" id="type" name="type" type="text" defaultValue={product.type} placeholder="Type *" data-sb-validations="required,email" />
                            <div className="invalid-feedback" data-sb-feedback="email:required">Type is required.</div>
                            <div className="invalid-feedback" data-sb-feedback="email:email">Type is not valid.</div>
                        </div>
                        <div className="form-group">
                         
                            <input className="form-control" id="imageUrl" name="imageUrl" type="text" defaultValue={product.imageUrl} placeholder="Image *" data-sb-validations="required,email" />
                            <div className="invalid-feedback" data-sb-feedback="email:required">Image is required.</div>
                            <div className="invalid-feedback" data-sb-feedback="email:email">Image is not valid.</div>
                        </div>
                        <div className="form-group mb-md-0">
                         
                            <input className="form-control" id="price" name="price" type="text" defaultValue={product.price} placeholder="Price *" data-sb-validations="required" />
                            <div className="invalid-feedback" data-sb-feedback="phone:required">Price.</div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group form-group-textarea mb-md-0">
                            {/* <!-- Message input--> */}
                            <textarea className="form-control" id="description" name="description" defaultValue={product.description} placeholder="Description *" data-sb-validations="required"></textarea>
                            <div className="invalid-feedback" data-sb-feedback="message:required">A description is required.</div>
                        </div>
                    </div>
                </div>
                {/* <!-- Submit success message--> */}
                {/* <!----> */}
                {/* <!-- This is what your users will see when the form--> */}
                {/* <!-- has successfully submitted--> */}
                <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center text-white mb-3">
                        <div className="fw-bolder">Form submission successful!</div>
                        To activate this form, sign up at
                        <br />
                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                    </div>
                </div>
                {/* <!-- Submit error message--> */}
                {/* <!----> */}
                {/* <!-- This is what your users will see when there is--> */}
                {/* <!-- an error submitting the form--> */}
                <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error saving changes!</div></div>
                {/* <!-- Submit Button--> */}
                <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase " id="submitButton" type="submit">Save Changes</button></div>
            </form>
        </div>
    </section>
    );

}