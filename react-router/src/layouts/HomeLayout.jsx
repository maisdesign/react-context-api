import { Outlet } from "react-router-dom";
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"


function HomeLayout() {
    return (
        <div className="container-fluid">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default HomeLayout
