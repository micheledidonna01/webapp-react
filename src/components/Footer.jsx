
const Footer = () => {
    return <footer className="bg-dark text-light py-4 mt-auto">
        <div className="container text-center">
            <p className="mb-1">&copy; {new Date().getFullYear()} MyMovies</p>
            <p className="mb-0">
                <a href="https://github.com/micheledidonna01?tab=repositories" className="text-light me-3">GitHub</a>
                <a href="https://www.instagram.com/michele__didonna/" className="text-light me-3">Instagram</a>
                <a href="/privacy" className="text-light">Privacy</a>
            </p>
        </div>
    </footer>
}

export default Footer;

