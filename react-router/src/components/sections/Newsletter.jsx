function Newsletter() {
    return (
        <section className="newsletter text-center">
            <div className="newsletter-inner">
                <h3 className="newsletter-title">Join BoolStore</h3>
                <p className="text-muted">Access exclusive archives and technical product launches before they reach the public catalog.</p>
                <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
                    <input
                        className="newsletter-input label"
                        type="email"
                        placeholder="EMAIL@DOMAIN.COM"
                    />
                    <button className="newsletter-btn label" type="submit">Subscribe</button>
                </form>
            </div>
        </section>
    )
}

export default Newsletter
