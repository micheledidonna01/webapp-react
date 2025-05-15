import { Outlet } from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "../components/Loader";
import { useContext } from "react";
import ContextLoader from "../contexts/contextLoader";
import ContextError from "../contexts/contextError";


const DefaultLayout = () => {

    const { isLoading } = useContext(ContextLoader);
    const { isError } = useContext(ContextError);

    return <>
        <Header />
        <main>
            {isLoading && <Loader />}
            {isError && <Error />}
            <Outlet />
        </main>
        <Footer />
    </>
}

export default DefaultLayout;