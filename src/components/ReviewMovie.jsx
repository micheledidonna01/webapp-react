import StarRating from "./StarRating";

const ReviewMovie = ({data}) => {
    console.log(data);
    const {name, rev, vote} = data;
    return <div className="bg-light bg-gradient border rounded p-3">
        <p className="fs-4"><span className="fw-bold"></span>{rev}</p>
        <p><span className="fw-bold">vote: <StarRating vote={vote}/> </span></p>
        <p className="text-secondary"><span>by </span>{name}</p>
    </div>

}

export default ReviewMovie;