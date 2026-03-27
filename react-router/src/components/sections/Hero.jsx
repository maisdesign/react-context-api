
import { Link } from "react-router-dom";
export default function Hero({ heroConfigObj }) {
    return (
        <section className="hero">
            <div className="row h-100 align-items-center">

                <div className="col-md-6 hero-content">
                    <p className="hero-label label">{heroConfigObj.label}</p>
                    <h1>{heroConfigObj.title}<br />{heroConfigObj.title2}</h1>
                    <div className="d-flex gap-3 mt-4">
                        <Link to="/products/1" className="btn btn-lg shop-btn label">{heroConfigObj.shopBtn}</Link>
                        <Link to="/about-us" className="btn btn-lg btn-outline-secondary label">{heroConfigObj.secondaryBtn}</Link>
                    </div>
                </div>

                <div className="col-md-6 d-flex align-items-center justify-content-center hero-image-col">
                    <div className="hero-image-wrap">
                        <img
                            className="hero-img"
                            alt={heroConfigObj.alt}
                            src={heroConfigObj.image}
                        />
                        <div className="hero-geo label">{heroConfigObj.geo}</div>
                    </div>
                </div>

            </div>
        </section>
    )
}
