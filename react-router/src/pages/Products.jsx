import { useState, useEffect } from 'react'
import { PacmanLoader } from 'react-spinners'
import { fetcher } from '../data/fetcher.js'
import { Link, useParams, useNavigate } from "react-router-dom";
import { ITEMS_PER_PAGE } from "../data/config.js"
import GridView from "../components/products/GridView.jsx"
import ListView from "../components/products/ListView.jsx"
import { useBudget } from "../contexts/BudgetContext";
const sortLabels = { featured: "Featured", az: "A-Z", za: "Z-A", "price-asc": "Price ↑", "price-desc": "Price ↓", "rating-asc": "Rating ↑", "rating-desc": "Rating ↓" }


function Products({ origin, basePath, title = "The Collection" }) {
    const { page } = useParams()
    const currentPage = parseInt(page) || 1
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [view, setView] = useState('grid')
    const [sortOption, setSortOption] = useState('featured')
    const navigate = useNavigate()
    const { maxPrice } = useBudget()
    const lowBudget = (maxPrice != null) ? (items.filter((item) => item.price <= maxPrice)) : (items)
    let sortedItems;
    switch (sortOption) {
        case "az": sortedItems = lowBudget.toSorted((a, b) => a.title.localeCompare(b.title)); break;
        case "za": sortedItems = lowBudget.toSorted((a, b) => b.title.localeCompare(a.title)); break;
        case "price-asc": sortedItems = lowBudget.toSorted((a, b) => a.price - b.price); break;
        case "price-desc": sortedItems = lowBudget.toSorted((a, b) => b.price - a.price); break;
        case "rating-asc": sortedItems = lowBudget.toSorted((a, b) => a.rating.rate - b.rating.rate); break;
        case "rating-desc": sortedItems = lowBudget.toSorted((a, b) => b.rating.rate - a.rating.rate); break;
        default: sortedItems = lowBudget;
    }

    useEffect(() => {
        fetcher(origin).then((response) => {
            setItems(response.data);
            setLoading(false);
        }).catch((err) => {
            setError(err.message);
            setLoading(false);
        })
    }, [origin])


    useEffect(() => {
        if (lowBudget.length === 0) return;
        const totalPages = Math.ceil(lowBudget.length / ITEMS_PER_PAGE);
        if (currentPage > totalPages) navigate(basePath + "/1", { replace: true });
    }, [lowBudget, currentPage, basePath, navigate])


    const totalPages = Math.ceil(lowBudget.length / ITEMS_PER_PAGE);
    const pagination = [];
    for (let i = 1; i <= totalPages; i++) {
        pagination.push(i);
    }

    const navigationButtons = (<div className="pagination">{(currentPage > 1) && <Link className="prev-button" to={basePath + "/" + (currentPage - 1)}>Prev</Link>}
        <div className="pagination-numbers">
            {pagination.map((pageNum) => <Link key={pageNum} className={(pageNum === currentPage) ? "is-active" : "not-active"} to={basePath + "/" + pageNum}>{pageNum}</Link>)}
        </div>
        {(currentPage < totalPages) && <Link className="next-button" to={basePath + "/" + (currentPage + 1)}>Next</Link>}</div>)

    return <>
        {loading && <PacmanLoader color="rgba(92, 230, 44, 1)" />}
        {error && <div className="danger">Errore: {error}</div>}

        <div className="catalog-page">
            <header className="catalog-header">
                <div>
                    <span className="catalog-label">Archive / Current Season</span>
                    <h1 className="catalog-title">{title}</h1>
                </div>
                <div className="catalog-count label">
                    Displaying <strong>{lowBudget.length}</strong> results
                </div>
            </header>

            <section className="catalog-utility-bar">
                <div className="utility-filter dropdown">
                    <button className="utility-filter-btn dropdown-toggle" data-bs-toggle="dropdown">
                        <span className="utility-filter-label">Sort By</span>
                        <span className="utility-filter-value">{sortLabels[sortOption]}</span>
                        <span className="material-symbols-outlined">expand_more</span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><button className="dropdown-item" onClick={() => setSortOption("az")}>A-Z</button></li>
                        <li><button className="dropdown-item" onClick={() => setSortOption("za")}>Z-A</button></li>
                        <li><button className="dropdown-item" onClick={() => setSortOption("price-asc")}>Price Ascending</button></li>
                        <li><button className="dropdown-item" onClick={() => setSortOption("price-desc")}>Price Descending</button></li>
                        <li><button className="dropdown-item" onClick={() => setSortOption("rating-asc")}>Rating Ascending</button></li>
                        <li><button className="dropdown-item" onClick={() => setSortOption("rating-desc")}>Rating Descending</button></li>
                    </ul>
                </div>

                {navigationButtons}

                <div className="utility-view-toggle">
                    <button className={"utility-view-btn" + (view === "grid" ? " is-active" : "")} onClick={() => setView("grid")}>
                        <span className="material-symbols-outlined" title="grid view">grid_view</span>
                    </button>
                    <button className={"utility-view-btn" + (view === "expanded" ? " is-active" : "")} onClick={() => setView("expanded")}>
                        <span className="material-symbols-outlined" title="expanded view">view_agenda</span>
                    </button>
                </div>
            </section>

            <div className={"items-container" + (view === "expanded" ? " is-list" : "")}>
                {
                    sortedItems.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE).map((item) =>
                        (view === "grid") ? <GridView key={item.id} item={item} /> : <ListView key={item.id} product={item} />
                    )
                }
            </div>

            {navigationButtons}

        </div>
    </>
}

export default Products
