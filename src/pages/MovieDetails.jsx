
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ReviewMovie from "../components/ReviewMovie";
import StarRating from "../components/StarRating";
import FormReview from "../components/FormReview";
import ContextLoader from "../contexts/contextLoader";
import ContextError from "../contexts/contextError";

const MovieDetails = () => {

    const [movie, setMovie] = useState(null);
    

    const api = "http://127.0.0.1:3005/api/movies";
    let { slug } = useParams();
    console.log(slug);
    const {setIsLoading} = useContext(ContextLoader);
    const {setIsError} = useContext(ContextError);

    function getMovie() {
        setIsLoading(true);
        axios.get(`${api}/${slug}`)
            .then(res => {
                setMovie(res.data);
            })
            .catch(err => {
                console.log(err);
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    function renderReviews(){
        return <>
            {movie.reviews.map((review, index) => <ReviewMovie key={index} data={review} />)}
        </>
    }




    useEffect(getMovie, []);


    return <div className="px-5 text-light">
        <div className="d-flex row justify-content-center mt-4 bg">
            <img src={movie?.imagePath} alt={movie?.title} className="w-50" />
            <h1 className="text-uppercase text-center py-2 fs-1">{movie?.title}</h1>

            {/* <p className="text-center my-5">{movie.title}</p> */}
        </div>

        <hr />

            <div className="d-flex row h-100 px-3 ">
                <p><span className="fw-bold">Author:</span>{movie?.director}</p>
                <p><span className="fw-bold">Genre:</span>{movie?.genre}</p>
                {/* <p><span className="fw-bold">Genre:</span>{movie.reviews[0].vote}</p>
                <p><span className="fw-bold">Genre:</span>{movie.name}</p>
                <p><span className="fw-bold">Genre:</span>{movie.text}</p> */}
                <p>{movie?.abstract}</p>
            </div>
        <hr />
        
        {/* review movie */}
        {movie?.reviews? <div className="my-5 d-flex row gap-3 px-3">
            <div className="d-flex justify-content-between">
                <h3>Reviews:</h3>
                <p>vote: <StarRating vote={movie?.voto_medio}/></p>
            </div>
            {renderReviews()}
        </div> : <div>Non ci sono recensioni</div>
        }

        {/* form review movie */}
        <FormReview slug={slug} getMovie={getMovie}/>
        
    </div>
}

export default MovieDetails;