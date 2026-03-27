import Hero from "../components/sections/Hero.jsx"
import BrandIdentity from "../components/home/BrandIdentity.jsx"
import Categories from "../components/categories/Categories.jsx"
import HomeSingleProduct from "../components/products/singleProduct/HomeSingleProduct.jsx"
import Newsletter from "../components/sections/Newsletter.jsx"
import { heroConfigObj, brandIdentityObj, featuredObj } from "../data/config.js"
import { PacmanLoader } from 'react-spinners'

import { useCategories } from "../contexts/CategoriesContext";

function HomePage() {
    const { apiCategory, loading, error } = useCategories();

    return <>
        <Hero heroConfigObj={heroConfigObj} />
        <BrandIdentity brandObj={brandIdentityObj} />
        {(loading) ? <PacmanLoader color="rgba(92, 230, 44, 1)" /> :
            (error) ? <div className="alert alert-danger">Errore: {error.message}</div> : <Categories apiCategory={apiCategory} />
        }
        <HomeSingleProduct product={featuredObj} />
        <Newsletter />
    </>
}

export default HomePage