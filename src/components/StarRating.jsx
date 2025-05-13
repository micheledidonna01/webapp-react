const StarRating = ({vote}) => {
    console.log(vote);
    const maxValue = 5;

    return [...Array(maxValue)].map((_, index) => index < vote ? <i className="fa-solid fa-star text-warning"></i> : <i className="fa-regular fa-star text-warning"></i>)
}

export default StarRating;