import { Link } from "react-router-dom"

function ListView({ product }) {
    return (
        <Link className="list-product-card" to={"/product/" + product.id}>
            <div className="list-product-image-box">
                <img className="list-product-img" alt={product.title} src={product.image} />
            </div>
            <div className="list-product-info">
                <span className="list-product-category">{product.category}</span>
                <h3 className="list-product-title">{product.title}</h3>
                <p className="list-product-description">{product.description}</p>
                <div className="list-product-footer">
                    <span className="product-price">{product.price}€</span>
                    <button className="add-to-cart-btn label">
                        Add to Cart
                        <span className="material-symbols-outlined">east</span>
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default ListView
