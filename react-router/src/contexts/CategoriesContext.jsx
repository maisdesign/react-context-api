import { createContext, useContext, useState, useEffect } from "react";
import { fetcher } from "../data/fetcher";
import { categoriesApi, singleCategoryApi, productsApi } from "../data/apiEndPoints";

const CategoriesContext = createContext();

function CategoriesProvider({ children }) {
    const [apiCategory, setApiCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [totalProducts, setTotalProducts] = useState(0);

    useEffect(() => {
        fetcher(categoriesApi).then((response) => {
            return Promise.all(
                response.data.map((category) =>
                    fetcher(singleCategoryApi + category).then((response) => ({
                        title: category,
                        image: response.data[0].image,
                        firstItem: response.data[0].title,
                    }))
                )
            ).then((response) => { setApiCategory(response); setLoading(false) })
        }).catch((err) => { setError(err); setLoading(false) });
        fetcher(productsApi).then((response) => {
            setTotalProducts(response.data.length)
        }).catch((err) => { setError(err); setLoading(false) });
    }, []);

    return (
        <CategoriesContext.Provider value={{ apiCategory, loading, error, totalProducts }}>
            {children}
        </CategoriesContext.Provider>
    );
}

function useCategories() {
    return useContext(CategoriesContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { CategoriesProvider, useCategories };
