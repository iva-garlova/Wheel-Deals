import { useContext } from "react";
import { useRegister } from "../../api/authenticationApi";
import { userContext } from "../../contexts/userContext";
import { useNavigate } from "react-router";

export default function Register() {
    const navigate = useNavigate();
    const { register } = useRegister();
    const { userLoginHandler } = useContext(userContext);

    const registerHandler = async (formData) => {
        const {email, password} = Object.fromEntries(formData);
        const repeatPassword = formData.get('repeat-password');

        if(password !== repeatPassword){
            return;
        }

        const authData = await register(email, password);
        userLoginHandler(authData);
        navigate('/')

    }
    return (
        <section className="page-section" id="contact">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Register</h2>
                <h3 className="section-subheading text-muted">Have no account?</h3>
            </div>
            <form id="contactForm" action={registerHandler}>
                <div className="row align-items-stretch mb-5">
                    <div className="col-md-6">
                        <div className="form-group">
                            {/* <!-- Name input--> */}
                            <input className="form-control" id="email" type="text" name="email" placeholder="Email *" data-sb-validations="required" />
                            <div className="invalid-feedback" data-sb-feedback="name:required">An email is required.</div>
                        </div>
                        <div className="form-group">
                            {/* <!-- Email address input--> */}
                            <input className="form-control" id="password" type="text" name="password" placeholder="Your Password *" data-sb-validations="required,email" />
                            <div className="invalid-feedback" data-sb-feedback="password:required">A password is required.</div>
                            <div className="invalid-feedback" data-sb-feedback="password:email">Password is not valid.</div>
                        </div>
                        <div className="form-group mb-md-0">
                            {/* <!-- Re-password input--> */}
                            <input className="form-control" id="rePassword" type="text" name="repeat-password" placeholder="Repeat Password *" data-sb-validations="required" />
                            <div className="invalid-feedback" data-sb-feedback="re-password:required">A re-password number is required.</div>
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