import { Link } from "react-router-dom";
export default function NotFound() {
    return <>

        <div className="not-found d-flex justify-content-center align-items-center">
            <div className="row align-items-center w-100">

                <div className="not-found-sidebar col-lg-1 d-none d-lg-flex flex-column justify-content-between">
                    <span className="not-found-sidebar-text label">System.Diagnostics.v2.04</span>
                    <span className="not-found-sidebar-text label">REF: 000-0404-NULL</span>
                </div>

                <div className="col-lg-10">

                    <div className="not-found-badge d-inline-flex align-items-center gap-2 mb-4 rounded-pill bg-surface-container-low">
                        <span className="not-found-badge-dot"></span>
                        <span className="not-found-badge-label label">ERROR: RESOURCE_NOT_FOUND_404</span>
                    </div>

                    <h1 className="not-found-title">
                        404
                    </h1>

                    <div className="not-found-content">
                        <p className="not-found-heading">
                            The page you are looking for has been archived or removed.
                        </p>
                        <p className="not-found-description">
                            Our digital archive is currently undergoing a structural synchronization. The requested node is no longer accessible at this URI.
                        </p>
                    </div>

                    <div className="d-flex flex-column flex-sm-row align-items-center gap-3 mt-5">
                        <Link to="/" className="shop-btn text-decoration-none" >
                            BACK TO HOME
                        </Link>
                        <Link to="/products/1" className="categories-explore-link" >
                            EXPLORE COLLECTIONS
                        </Link>
                    </div>

                    <div className="not-found-bg d-none d-xl-block">
                        <img className="not-found-bg-img" alt="Abstract architectural wireframe" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQgM31SfXMDtCyETFzV9_4BGhr2O_MP_207RVaBbvm1xpnciiV3i1Y5WSb7b7bpdAdmj064sjFOPRSlhn7lbWcR-svu_58W7ZmRUWNCO79baccLjPyJj-kq_L93uuyizTCrbL7Gt7wcw46hRta3mcFgn1JITRSllMoCdpNr-OW9RreQXMSyYwtZ9ZOjQipO7WAP5-abviOt7bNy-3Ccj5c-rzF5oKridsL5-ewfCkBsAd4FGj6_mLK3kSxvTCjNBRhPSUX3sqTyQ" />
                    </div>
                </div>

                <div className="col-lg-1"></div>
            </div>
        </div>
    </>
}
