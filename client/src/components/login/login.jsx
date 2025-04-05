
import { useActionState } from "react";
import { useNavigate } from "react-router";

export default function Login({
    onLogin,
}) {

    const navigate = useNavigate();

    const loginHandler = (previousState, formData) => {
        const values = Object.fromEntries(formData)

        onLogin(values.email);

        navigate('/products');

        return values;
    }

    const [values, loginAction, isPending] = useActionState(loginHandler, {email:'', password:''});
    console.log(values);
    
  
    
    return (
        <section className="page-section" id="contact">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">login</h2>
                <h3 className="section-subheading text-muted">Have no account?</h3>
            </div>
            <form id="contactForm" action={loginAction} >
                <div className="row align-items-stretch mb-5">
                    <div className="col-md-6">
                        <div className="form-group">
                            {/* <!-- Email input--> */}
                            <input className="form-control" id="name" name="email "type="text" placeholder="Email *" data-sb-validations="required" />
                            <div className="invalid-feedback" data-sb-feedback="email:required">An Email is required.</div>
                        </div>
                        <div className="form-group">
                            {/* <!-- Password input--> */}
                            <input className="form-control" id="password" name="password" type="passoword" placeholder="Your Password *"  />
                            {/* <div className="invalid-feedback" data-sb-feedback="password:required">Password is required.</div>
                            <div className="invalid-feedback" data-sb-feedback="password:email">Password is not valid.</div> */}
                        </div>
                        <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase " id="submitButton" type="submit" disabled={isPending} > login</button></div>
                       
                    </div>
                    <div className="col-md-6">
                        {/* TO DO LOGO */}
                    </div>
                </div>
                </form>
                </div>
                </section>
    );
}