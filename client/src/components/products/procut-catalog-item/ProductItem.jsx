import { Link } from "react-router";

export default function ProductItem({
    title,
    imageUrl,
    price,
    _id,
}) {
    return (
        <div className="row">
        <div className="col-lg-4 col-sm-6 mb-4">
            {/* <!-- Portfolio item 1--> */}
            <div className="portfolio-item">
                <Link className="portfolio-link" to={`/products/${_id}/details`} >
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid" src={imageUrl} alt="..." />
                </Link>
                <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">{title}</div>
                    <div className="portfolio-caption-subheading text-muted">{price}</div>
                </div>
            </div> 
        </div>

       </div>
    );
}