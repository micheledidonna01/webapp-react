import { Link } from "react-router-dom";
import StarRating from "./StarRating";
const MoviesList = ({ data }) => {


    const { slug, title, director, genre, imagePath, voto_medio } = data;

    return <div className="card bg-black col-sm-12 col-md-6 col-lg-4">
            <img src={imagePath} className="card-img-top w-25 pt-3 mx-auto mb-3" alt={title} />
            <div className="card-body d-flex row text-light">
                <Link to={`/${slug}`} className="text-decoration-none pb-3"><h2 className="card-title text-light fs-1">{title}</h2></Link>
                <p className="card-text"><span className="fw-bold">Author: </span>{director}</p>
                <p className="card-text"><span className="fw-bold">Genre: </span>{genre}</p>
                <p className="card-text"><span className="fw-bold">vote: </span><StarRating vote={voto_medio}/></p>
                <Link to={`/${slug}`} className="btn btn-primary">Detail of Movie</Link>
            </div>
        </div>
    
}

export default MoviesList;