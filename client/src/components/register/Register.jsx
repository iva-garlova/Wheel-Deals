export default function Register() {
    return (
        <section className="page-section" id="contact">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Register</h2>
                <h3 className="section-subheading text-muted">Have no account?</h3>
            </div>
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                <div className="row align-items-stretch mb-5">
                    <div className="col-md-6">
                        <div className="form-group">
                            {/* <!-- Name input--> */}
                            <input className="form-control" id="email" type="text" placeholder="Email *" data-sb-validations="required" />
                            <div className="invalid-feedback" data-sb-feedback="name:required">An email is required.</div>
                        </div>
                        <div className="form-group">
                            {/* <!-- Email address input--> */}
                            <input className="form-control" id="password" type="text" placeholder="Your Password *" data-sb-validations="required,email" />
                            <div className="invalid-feedback" data-sb-feedback="email:required">A password is required.</div>
                            <div className="invalid-feedback" data-sb-feedback="email:email">Password is not valid.</div>
                        </div>
                        <div className="form-group mb-md-0">
                            {/* <!-- Phone number input--> */}
                            <input className="form-control" id="rePassword" type="text" placeholder="Repeat Password *" data-sb-validations="required" />
                            <div className="invalid-feedback" data-sb-feedback="phone:required">A re-password number is required.</div>
                        </div>
                       
                    </div>
                    <div className="col-md-6">
                        {/* TO DO LOGO */}
                    </div>
                    
                </div>
                <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase " id="submitButton" type="submit"> Register</button></div>
                </form>
                </div>
                </section>
    );
}