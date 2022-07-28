

function Movie(props) {
    return (
        <div className="Movie">
            <h2>Title: {props.details.title}</h2>
            <h3>Rating: {props.details.rating}</h3>
            <h3>Genres: {props.details.genres}</h3>
            {props.details.imgURL
                ? <img src={props.details.imgURL} alt={props.details.title} />
                : <p>Sorry, no image</p>
            }
            <button onClick={() => {props.callbackToDelete(props.details.id)}}>Delete</button>
        </div>
    );
}

export default Movie;