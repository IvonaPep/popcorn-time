import "./Main.css";
import Movie from "./Movie";

function Main(props) {


  
  return (
    <div className="Main">
      
    {/* we use the index just in this case for having the unique key, because new created movies dont have an id*/}
      {props.movies.map((movieObj, index) => {
        return (
          <div key={index} className="movie">
            <Movie details={movieObj} callbackToDelete ={props.callbackToDelete}/>
          </div>
        );
      })}
    </div>
  );
}

export default Main;
