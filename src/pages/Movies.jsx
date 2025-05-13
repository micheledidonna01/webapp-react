import axios from "axios";
import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";

const Movies = () => {

    const api = "http://127.0.0.1:3005/api/movies";

    const [movies, setMovies] = useState([]);

    const [search, setSearch] = useState('');
    function getMovies() {

        axios.get(api, {
            params:{
                search
            }
        })
            .then(res => {
                setMovies(res.data);
            })
            .catch(err => console.log(err));
    }

    function searchMovies(e) {
        e.preventDefault();
        getMovies();
        setSearch('');
    }
    useEffect(getMovies, []);

    console.log(movies);

    return <div className="px-5 mb-5">
        <div className="d-flex justify-content-between mb-5">
            <h1 className="mb-3">Movies</h1>
            <form onSubmit={searchMovies} className="row g-3">
                <div className="col-auto">
                <label htmlFor="" className="visually-hidden"></label>
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button className="btn btn-outline-primary" type="submit">Search</button>
                </div>
            </form>
        </div>

        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
            {movies.length ? movies.map((movie) => (
                <MoviesList key={movie.id} data={movie} />
            )) : <div>Nessun fil trovato</div>}

        </div>
    </div>
}

export default Movies;