function SingleProduct({ product }) {
    return (
        <section className="single-product">
            <div className="row align-items-center g-5">

                <div className="col-lg-6 product-image-col">
                    <div className="product-image-box">
                        <img
                            className="product-img"
                            alt={product.title}
                            src={product.image}
                        />
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="d-flex gap-2 mb-4">
                        <div className="ratings">
                            <span className="rating-label">Reviews: {product.rating.count}</span>
                            <span className="rating-value">★ {product.rating.rate}</span>
                        </div>
                    </div>
                    <h2 className="mb-3">{product.title}</h2>
                    <p className="text-muted mb-4">{product.description}</p>

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

export default SingleProduct
