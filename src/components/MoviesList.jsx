import { Link } from "react-router-dom";
const MoviesList = ({ data }) => {


    const { id, title, director, genre, imagePath, voto_medio } = data;

    return <>
        <div className="card">
            <img src={imagePath} className="card-img-top w-50 mx-auto mb-3" alt={title} />
            <div className="card-body d-flex row">
                <Link to={`/${id}`} className="text-decoration-none"><h2 className="card-title">{title}</h2></Link>
                <p className="card-text"><span className="fw-bold">Author:</span>{director}</p>
                <p className="card-text"><span className="fw-bold">Genre:</span>{genre}</p>
                <p className="card-text"><span className="fw-bold">vote:</span>{voto_medio}</p>
                <Link to={`/${id}`} className="btn btn-primary">Detail of Movie</Link>
            </div>
        </div>
    </>
}

export default MoviesList;