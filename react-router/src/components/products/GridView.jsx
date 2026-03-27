import { Link } from "react-router-dom";
export default function GridView({ item }) {
    return <>
        <Link className="product-card" to={"/product/" + item.id}>
            <div className="product-card-image-box">
                <img src={item.image} className="product-card-img" alt={item.title} />
                <div className="product-card-hover-btn">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                </div>
            </div>
            <div className="product-card-info">
                <p className="product-card-title">{item.title}</p>
                <span className="product-card-price">{item.price}€</span>
            </div>
        </Link>
    </>
}