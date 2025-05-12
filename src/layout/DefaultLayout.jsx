import { Outlet } from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
const DefaultLayout = () => {
    return <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
}

export default DefaultLayout;