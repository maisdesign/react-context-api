function HomeSingleProduct({ product }) {
    return (
        <section className="single-product">
            <div className="row align-items-center g-5">

                <div className="col-lg-6 product-image-col">
                    <div className="product-image-box">
                        <img
                            className="product-img"
                            alt={product.alt}
                            src={product.image}
                        />
                    </div>
                    <div className="product-badge d-none d-md-block">
                        <p className="label">Stock Status</p>
                        <p className="fw-bold">{product.shipping}</p>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="d-flex gap-2 mb-4">
                        {product.tags.map((tag) => <span key={tag} className="product-tag">{tag}</span>
                        )}
                    </div>
                    <h2 className="mb-3">{product.name}</h2>
                    <p className="text-muted mb-4">{product.description}</p>

                    <div className="product-specs mb-4">
                        {(product.spec.map((spec) =>
                            <div key={spec.id} className="product-specs-row">
                                <span className="product-specs-label">{spec.label}</span>
                                <span>{spec.value}</span>
                            </div>
                        ))}
                    </div>

                    <div className="d-flex align-items-center gap-4">
                        <span className="product-price">{product.price}</span>
                        <button className="add-to-cart-btn label">
                            Add to Cart
                            <span className="material-symbols-outlined">east</span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HomeSingleProduct
