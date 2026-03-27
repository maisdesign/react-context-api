import { Link } from "react-router-dom";
export default function Categories({ apiCategory }) {
    return (
        <section className="categories">

            <div className="categories-header">
                <div>
                    <span className="categories-catalog-label label">Catalog 01</span>
                    <h3 className="categories-title">The Collection</h3>
                </div>
                <Link to="/products/1" className="categories-explore-link label d-none d-md-block" >Explore All Products</Link>
            </div>

            <div className="categories-grid">


                {apiCategory.map((category) => (
                    <div key={category.title} className="category-card">
                        <img className="category-img" alt={category.title} src={category.image} />
                        <div className="category-overlay">
                            <span className="category-index label">
                                {category.firstItem}
                            </span>
                            <h4>{category.title}</h4>
                            <p className="category-subtitle label">Enhance your {category.title}</p>

                        </div>
                        <Link to={"/category/" + category.title} className="position-absolute top-0 start-0 w-100 h-100" ></Link>
                    </div>

                )
                )
                }

            </div>

        </section>
    )
}
