
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReviewMovie from "../components/ReviewMovie";
import StarRating from "../components/StarRating";
import FormReview from "../components/FormReview";

const MovieDetails = () => {

    const [movie, setMovie] = useState(null);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(false);

    const api = "http://127.0.0.1:3005/api/movies";
    let { id } = useParams();
    


    function getMovie() {
        setLoading(true);
        axios.get(`${api}/${id}`)
            .then(res => {
                setMovie(res.data);
            })
            .catch(err => {
                console.log(err);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    function renderReviews(){
        return <>
            {movie.reviews.map((review, index) => <ReviewMovie key={index} data={review} />)}
        </>
    }




    useEffect(getMovie, []);

    if (loading) {
        return <p className="text-center">
            Sto caricando il post...
        </p>
    }

    if (error) {
        return <p className="text-center">
            C'è stato un errore durante il caricamento
        </p>
    }

    return <div className="px-5">
        <div className="d-flex row justify-content-center mt-4 bg">
            <img src={movie.imagePath} alt={movie.title} className="w-50" />
            <h1 className="text-uppercase text-center py-2 fs-1">{movie?.title}</h1>

            {/* <p className="text-center my-5">{movie.title}</p> */}
        </div>

        <hr />

            <div className="d-flex row h-100 px-3">
                <p><span className="fw-bold">Author:</span>{movie?.director}</p>
                <p><span className="fw-bold">Genre:</span>{movie?.genre}</p>
                {/* <p><span className="fw-bold">Genre:</span>{movie.reviews[0].vote}</p>
                <p><span className="fw-bold">Genre:</span>{movie.name}</p>
                <p><span className="fw-bold">Genre:</span>{movie.text}</p> */}
                <p>{movie?.abstract}</p>
            </div>
        <hr />
        
        {/* review movie */}
        {movie.reviews? <div className="my-5 d-flex row gap-2 px-3">
            <div className="d-flex justify-content-between">
                <h3>Reviews:</h3>
                <p>vote: <StarRating vote={movie?.voto_medio}/></p>
            </div>
            {renderReviews()}
        </div> : <div>Non ci sono recensioni</div>
        }

        {/* form review movie */}
        <FormReview id={id} getMovie={getMovie}/>
        
    </div>
}

export default MovieDetails;