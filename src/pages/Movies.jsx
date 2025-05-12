import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";

const Movies = () => {

    const api = "http://127.0.0.1:3005/api/movies";

    const [movies, setMovies] = useState([]);
    function getMovies(){

        axios.get(api)
        .then(res => {
            setMovies(res.data);
        })
        .catch(err => console.log(err));
    }

    useEffect(getMovies, []);

    return <div className="px-5 mb-5">
    <h1 className="mb-3">Movies</h1>

        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
    {movies.length? movies.map((movie) => (
        <MoviesList key={movie.id} data={movie} />
    )) : <div>Nessun fil trovato</div>}

    </div>
    </div>
}

export default Movies;