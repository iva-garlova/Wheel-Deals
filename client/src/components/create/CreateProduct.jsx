import { useNavigate } from 'react-router';
import { useCreateProduct } from '../../api/productApi';

export default function CreateProduct() {
    const navigate = useNavigate();
    const { create } = useCreateProduct();

   const submitAction = async(FormData) => {
    const productData = Object.fromEntries(FormData);


await create(productData);
    
 navigate('/products');
    
   }

    return(
        <section className="page-section" id="contact">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Create New Post</h2>
                <h3 className="section-subheading text-muted">Give your details below.</h3>
            </div>

            <form id="contactForm" action={submitAction} data-sb-form-api-token="API_TOKEN">
                <div className="row align-items-stretch mb-5">
                    <div className="col-md-6">
                        <div className="form-group">
                            {/* <!-- Product Name input--> */}
                            <input className="form-control" id="name" name="title" type="text" placeholder="Product Name *" data-sb-validations="required" />
                            <div className="invalid-feedback" data-sb-feedback="name:required">A product name is required.</div>
                        </div>
                        <div className="form-group">
                            {/* <!-- Email address input--> */}
                            <input className="form-control" id="imageUrl" name="imageUrl" type="text" placeholder="Image *" data-sb-validations="required,email" />
                            <div className="invalid-feedback" data-sb-feedback="email:required">Image is required.</div>
                            <div className="invalid-feedback" data-sb-feedback="email:email">Image is not valid.</div>
                        </div>
                        <div className="form-group">
                            {/* <!-- Email address input--> */}
                            <input className="form-control" id="type" name="type" type="text" placeholder="Type *" data-sb-validations="required,email" />
                            <div className="invalid-feedback" data-sb-feedback="email:required">Type is required.</div>
                            <div className="invalid-feedback" data-sb-feedback="email:email">Type is not valid.</div>
                        </div>
                        <div className="form-group mb-md-0">
                            {/* <!-- Phone number input--> */}
                            <input className="form-control" id="price" name="price" type="text" placeholder="Price *" data-sb-validations="required" />
                            <div className="invalid-feedback" data-sb-feedback="phone:required">Price.</div>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="form-group form-group-textarea mb-md-0">
                            {/* <!-- Message input--> */}
                            <textarea className="form-control" id="description" name="description" placeholder="Description *" data-sb-validations="required"></textarea>
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
                <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error creating post!</div></div>
                {/* <!-- Submit Button--> */}
                <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase " id="submitButton" type="submit"> Save & Create</button></div>
            </form>
        </div>
    </section>
    );
}