import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout"
import HomeLayout from "./layouts/HomeLayout"
import HomePage from "./pages/HomePage.jsx";
import AboutUs from "./pages/AboutUs.jsx"
import Products from "./pages/Products.jsx"
import ProductDetail from "./pages/ProductDetail.jsx"
import CategoryPage from "./pages/CategoryPage.jsx"
import NotFound from "./pages/NotFound.jsx"
import { productsApi } from "./data/apiEndPoints.js"

import { CategoriesProvider } from "./contexts/CategoriesContext";
import { BudgetProvider } from "./contexts/BudgetContext";

export default function App() {
  return (
    <BrowserRouter>
      <BudgetProvider>
        <CategoriesProvider>
          <Routes>
            <Route element={<HomeLayout />}>
              <Route path="/" element={<HomePage />} />
            </Route>
            <Route element={<DefaultLayout />}>
              <Route path="/products/:page" element={<Products origin={productsApi} basePath="/products" />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/category/:categoryName" element={<CategoryPage />} />
              <Route path="/category/:categoryName/:page" element={<CategoryPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </CategoriesProvider>
      </BudgetProvider>
    </BrowserRouter>
  );
}
