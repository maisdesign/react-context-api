import { NavLink, Link, useMatch } from "react-router-dom";
import { websiteName } from "../../data/config.js"
import { useCategories } from "../../contexts/CategoriesContext";
import { useBudget } from "../../contexts/BudgetContext";

function NavBar({ location }) {
    const { apiCategory } = useCategories();
    const { setMaxPrice } = useBudget();
    const match1 = useMatch("/products/:page");
    const match2 = useMatch("/category/:categoryName");
    const match3 = useMatch("/category/:categoryName/:page");

    function setterMaxPrice(value) {
        if (isNaN(parseInt(value))) {
            setMaxPrice(null)
        } else {
            setMaxPrice(parseInt(value))
        }
    }

    const showMaxPrice = match1 || match2 || match3

    return (

        <nav className="site-nav navbar navbar-expand-lg">
            <div className="site-nav-inner">
                <div className="site-nav-left">
                    <Link className="site-nav-brand" to="/">{websiteName}</Link>
                    <div className="collapse navbar-collapse" id={location + "Nav"}>
                        <ul className="site-nav-links">
                            <li>
                                <NavLink className={({ isActive }) => "site-nav-link" + (isActive ? " is-active" : "")} to="/" end>Home Page</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => "site-nav-link" + (isActive ? " is-active" : "")} to="/products/1">Products</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => "site-nav-link" + (isActive ? " is-active" : "")} to="/about-us">About Us</NavLink>
                            </li>
                            <li className="dropdown">
                                <button data-bs-toggle="dropdown" className="site-nav-link dropdown-toggle">Categories</button>
                                <ul className="dropdown-menu">
                                    {apiCategory.map((category) => (
                                        <li key={category.title}>
                                            <NavLink className="dropdown-item" to={"/category/" + category.title}>{category.title}</NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            {showMaxPrice &&
                                <li>
                                    <label htmlFor="maxPrice" className="site-nav-link">Max Price
                                        <input type="number" min="0" id="maxPrice" onChange={(e) => (setterMaxPrice(e.target.value))}>
                                        </input>
                                    </label>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
                <div className="site-nav-right">
                    <div className="site-nav-icons">
                        <span className="material-symbols-outlined site-nav-icon">search</span>
                        <span className="material-symbols-outlined site-nav-icon">shopping_cart</span>
                        <span className="material-symbols-outlined site-nav-icon">account_circle</span>
                    </div>
                    <button className="navbar-toggler site-nav-toggler" type="button" data-bs-toggle="collapse" data-bs-target={"#" + location + "Nav"} aria-controls={location + "Nav"} aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="site-nav-border"></div>
            </div>
        </nav >
    )
}

export default NavBar
