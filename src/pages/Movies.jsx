import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";
import ContextLoader from "../contexts/contextLoader";
import ContextError from "../contexts/contextError";

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


    return <div className="px-5 mb-5">
        <div className="d-flex justify-content-between mb-5">
            <h1 className="mb-3">Movies</h1>
            <form onSubmit={searchMovies}>
                <div className="d-flex">
                    <label htmlFor="exampleInputEmail1" className="visually-hidden">Email address</label>
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
        <hr />

        {/* add new film form */}
        {/* <div className="card my-5">
            <div className="card-header">
                <h4>Add a new film</h4>
            </div>

            <div className="card-body">
                <form onSubmit={handleSubmitMovie}>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            onChange={handleFormMovie}
                            value={newMovie.title}
                            name="title"
                            placeholder="title 1"
                        />
                        <label htmlFor="name">Title</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            onChange={handleFormMovie}
                            value={newMovie.director}
                            name="director"
                            placeholder="dirigente"
                        />
                        <label htmlFor="director">director</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            onChange={handleFormMovie}
                            value={newMovie.genre}
                            name="genre"
                            placeholder="dirigente"
                        />
                        <label htmlFor="genre">genre</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="number"
                            className="form-control"
                            onChange={handleFormMovie}
                            value={newMovie.release_year}
                            name="release_year"
                            min={1000}
                            max={2025}
                            placeholder="dirigente"
                        />
                        <label htmlFor="release_year">release year</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            onChange={handleFormMovie}
                            value={newMovie.abstract}
                            name="abstract"
                            placeholder="dirigente"
                        />
                        <label htmlFor="abstract">abstract</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            onChange={handleFormMovie}
                            value={newMovie.image}
                            name="image"
                            placeholder="dirigente"
                        />
                        <label htmlFor="image">image</label>
                    </div>
                    <button className="btn btn-outline-primary" type="submit">add film</button>
                </form>
            </div>
        </div> */}
    </div>
}

export default Movies;