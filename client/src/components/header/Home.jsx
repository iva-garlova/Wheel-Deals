import { Link } from "react-router";

export default function Home() {
    return (
        <header className="masthead">
        <div className="container">
            <div className="masthead-subheading">Welcome To Wheel Deals!</div>
            <div className="masthead-heading text-uppercase">Its Nice To Have You</div>
            <Link className="btn btn-primary btn-xl text-uppercase" to="/about">About us</Link>
        </div>
    </header>
    );
}