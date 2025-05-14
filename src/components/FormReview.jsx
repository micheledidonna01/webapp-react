import axios from "axios";
import { useState } from "react";

const FormReview = ({id, getMovie})=>{
    let defaultForm = {
        name: "",
        text: "",
        vote: 1
    };

    console.log(id);

    const [formData, setFormData] = useState(defaultForm);

    function handleForm(e) {
        let { name, value } = e.target;
        let currentValue = value;
        if(name === 'vote'){
            currentValue = parseInt(value);
        }


        setFormData((formData) => ({
            ...formData,
            [name]: currentValue
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        axios.post(`http://127.0.0.1:3005/api/movies/${id}/reviews`, formData)
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err))
        getMovie();
        setFormData(defaultForm);
    }
    return <div className="card mb-5">
        <div className="card-header">
            <h4>Add a new review</h4>
        </div>

        <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        onChange={handleForm}
                        value={formData.name}
                        name="name"
                        placeholder="ex.Michele"
                    />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-section mb-3">
                    <textarea
                        className="form-control"
                        onChange={handleForm}
                        value={formData.text}
                        name="text"
                        rows="3"
                        placeholder="ex.so good this film"
                    />
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="number"
                        className="form-control"
                        onChange={handleForm}
                        value={formData.vote}
                        name="vote"
                        min={1}
                        max={5}
                        placeholder="vote 1 to 5"
                    />
                    <label htmlFor="vote">Vote</label>
                </div>
                <button className="btn btn-outline-primary" type="submit">send review</button>
            </form>
        </div>
    </div>
}

export default FormReview;