
import { useActionState, useContext } from "react";
import { useNavigate } from "react-router";
import { useLogin } from "../../api/authenticationApi";
import { userContext } from "../../contexts/userContext";

export default function Login() {

    const navigate = useNavigate();
    const {userLoginHandler} = useContext(userContext)
    const {login} = useLogin();

    const loginHandler = async (_, formData) => {
        const values = Object.fromEntries(formData);

        const authData = await login(values.email, values.password);
        
        userLoginHandler(authData);

        navigate('/products');

            }

    const [, loginAction, isPending] = useActionState(loginHandler, {email:'', password:''});
    
    
  
    
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
                            <input className="form-control" id="name" name="email" type="text" placeholder="Email *" data-sb-validations="required" />
                            <div className="invalid-feedback" data-sb-feedback="email:required">An Email is required.</div>
                        </div>
                        <div className="form-group">
                            {/* <!-- Password input--> */}
                            <input className="form-control" id="password" name="password" type="password" placeholder="Your Password *"  />
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