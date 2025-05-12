import { Link } from "react-router-dom";
const Header = () => {
    return <header className="mb-3">
    <nav className="d-flex justify-content-between px-5 py-3 align-items-center bg-dark text-secondary">
        <h2>My Movies</h2>
            <Link to="/" className="text-decoration-none text-dark btn btn-secondary">Movies</Link>
    </nav>
    </header>
}

export default Header;