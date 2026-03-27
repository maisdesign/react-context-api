import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="d-flex flex-column gap-3">
                    <div className="footer-brand">BoolStore</div>
                    <div className="footer-tagline label">
                        A curated archive of functional essentials. Designed for the minimal architect, built for the digital enthusiast.
                    </div>
                    <p className="footer-copy label">© 2026 BoolStore. BUILT FOR THE MINIMALIST.</p>
                </div>
                <div className="footer-links">
                    <div className="footer-links-col">
                        <Link className="footer-link label" to="/">Terms</Link>
                        <Link className="footer-link label" to="/">Privacy</Link>
                    </div>
                    <div className="footer-links-col">
                        <Link className="footer-link label" to="/">Shipping</Link>
                        <Link className="footer-link label" to="/">API Documentation</Link>
                    </div>
                    <div className="footer-links-col">
                        <button className="material-symbols-outlined footer-link" style={{ cursor: 'pointer' }}>language</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
