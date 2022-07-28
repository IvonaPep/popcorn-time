import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import moviesArray from "./data/movies.json";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState(moviesArray);

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [genres, setGenres] = useState("");
  const [imgURL, setImgURL] = useState("");

  const deleteMovie = (movieId) => {
    setMovies((prevMovies) => {
      const newList = prevMovies.filter((element) => {
        return element.id !== movieId ? true : false;
      });

      return newList;
    });
  };

const handleSubmit = (event) => {
event.preventDefault();

const newMovie = {title, rating, genres, imgURL};

setMovies( (prevMovies) => {
  // ............adds new movie and makes a copy of the already ecisting movies
  return [newMovie, ...prevMovies];
});

//clear Form after submitting
setTitle("");
setRating("");
setGenres("");
setImgURL("");

}

  return (
    <>
      <Header numberOfMovies={movies.length} />
      <div id="create">
        <form  onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="enter the title" value={title} onChange={(e) => { setTitle(e.target.value) }}/>
          <input type="number" min={1} max={10} name="rating" placeholder="rating" value={rating} onChange={(e) => { setRating(e.target.value) }}/>
          <input type="text" name="genres" placeholder="enter the genres" value={genres} onChange={(e) => { setGenres(e.target.value) }}/>
          <input type="text" name="imgURL" placeholder="enter the image" value={imgURL} onChange={(e) => { setImgURL(e.target.value) }}/>
          <button>Create</button>
        </form>
      </div>

      <Main movies={movies} callbackToDelete={deleteMovie} />
      <Footer />
    </>
  );
}

export default App;
