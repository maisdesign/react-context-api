import { useParams } from "react-router-dom"
import { singleCategoryApi } from "../data/apiEndPoints.js"
import Products from "./Products.jsx"
export default function CategoryPage() {
    const { categoryName } = useParams();
    const categoryUrl = singleCategoryApi + categoryName;

    return <Products origin={categoryUrl} basePath={"/category/" + categoryName} title={categoryName} />

}