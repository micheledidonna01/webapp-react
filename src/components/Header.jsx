import { Link, NavLink } from "react-router-dom";
const Header = () => {
    return <header className="mb-3">
        <nav className="navbar navbar-expand-lg fixed-top">

            <div className="container-fluid d-flex justify-content-between">
                <Link className="navbar-brand" to="/">
                    <img src="../../public/logo.png" alt="logo" className="logo-image" />
                </Link>
                <ul className="nav text-dark d-flex gap-2">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Movies</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact-us" className="nav-link">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link">About</NavLink>
                    </li>
                </ul>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup" data-bs-theme="dark">
                    <div className="navbar-nav">
                        <Link to="/" className="text-decoration-none text-dark btn btn-secondary">Movies</Link>
                    </div>
                </div> */}
            </div>
        </nav>
    </header>
}

export default Header;