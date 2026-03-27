import { NavLink, Link } from "react-router-dom";
import { websiteName } from "../../data/config.js"
import { useCategories } from "../../contexts/CategoriesContext";
import { useBudget } from "../../contexts/BudgetContext";

function NavBar({ location }) {
    const { apiCategory } = useCategories();
    const { budgetMode, setBudgetMode } = useBudget();
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
                            <li className="site-nav-link">
                                <button className={(budgetMode) ? "site-nav-link is-active" : "site-nav-link"} onClick={() => setBudgetMode(!budgetMode)}>
                                    {(!budgetMode) ? `Activate budget mode` : `Disable budget mode`}
                                </button>
                            </li>
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
        </nav>
    )
}

export default NavBar
