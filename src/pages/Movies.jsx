import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";
import ContextLoader from "../contexts/contextLoader";
import ContextError from "../contexts/contextError";
import { Link } from "react-router-dom";
const Movies = () => {

    const api = "http://127.0.0.1:3005/api/movies";

    const [movies, setMovies] = useState([]);

    const [search, setSearch] = useState('');

    const { setIsLoading } = useContext(ContextLoader);
    const { setIsError} = useContext(ContextError);

    // const defaultMovie = {
    //     title : "",
    //     director: "",
    //     genre: "",
    //     release_year: 1999,
    //     abstract: "",
    //     image:"",
    // }
    // const [newMovie, setNewMovie] = useState(defaultMovie);

    function getMovies() {
        setIsLoading(true);
        axios.get(api, {
            params: {
                search
            }
        })
            .then(res => {
                setMovies(res.data);
                
            })
            .catch(err => {
                console.log(err);  
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    function searchMovies(e) {
        e.preventDefault();
        getMovies();
        setSearch('');
    }

    useEffect(getMovies, []);


    return <div className="px-5 mb-5 text-muted">
        <div className="d-flex justify-content-between mb-5 barra-ricerca">
            <h1 className="mb-3 fs-3 text-warning align-content-start">Movies on...The channel</h1>
            <form onSubmit={searchMovies} className="align-content-end">
                <div className="d-flex">
                    <div className="d-flex g-2"> 
                    <label htmlFor="exampleInputEmail1" className="visually-hidden">Email address</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        placeholder="film to watch..."
                    />
                    </div>
                    <button className="btn btn-outline-danger mx-2" type="submit">Search</button>
                </div>
            </form>

        </div>
        <div className="d-flex justify-content-start my-4">
        <Link to="/add-movie" className="text-decoration-none text-dark btn btn-secondary">Add Movie</Link>
        </div>

        <div className="d-flex row">
            {movies.length ? movies.map((movie) => (
                <MoviesList key={movie.id} data={movie}/>
            )) : <div>Nessun fil trovato</div>}

        </div>
        <hr />

    </div>
}

export default Movies;