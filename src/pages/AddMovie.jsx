import { useState } from "react";
import axios from "axios";

const AddMovie = ()=>{

    let defaultMovie = {
        title: "",
        director: "",
        genre: "",
        release_year: 1999,
        abstract: "",
        image: null,
    }
    const [newMovie, setNewMovie] = useState(defaultMovie);

    function handleFormMovie(e) {
        let { name, value, files } = e.target;
        let currentValue;

        if(name === 'image'){
            currentValue = files[0];
        } else {
            currentValue = value;
        }
        
        if(name === 'release_year'){
            currentValue = parseInt(value);
        }
        setNewMovie((newMovie) => ({
            ...newMovie,
            [name]: currentValue
        })
        );
    }

    function handleSubmitMovie(e) {
        e.preventDefault();

        axios.post(`http://127.0.0.1:3005/api/movies/add-movie`, newMovie, {headers:{
            "Content-Type": 'multipart/form-data'
        }
        })
            .then(res => {
                console.log(res);
                setNewMovie(defaultMovie);
            })
            .catch(err => console.log(err));
        
        
        
        console.log(newMovie);
    }
    

    return <div className="px-5">
        <div className="card my-5">
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
                            type="file"
                            className="form-control"
                            onChange={handleFormMovie}
                            name="image"
                            placeholder="dirigente"
                        />
                        <label htmlFor="image">image</label>
                    </div>
                    <button className="btn btn-outline-primary" type="submit">add film</button>
                </form>
            </div>
        </div>
    </div>
}

export default AddMovie;