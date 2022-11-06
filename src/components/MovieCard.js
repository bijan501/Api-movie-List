import { getByDisplayValue } from "@testing-library/react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const MovieCard = ({ movie, func, showDelete, handleOnClear}) => {
  console.log(movie);
  const { Poster, Title, Year, imdbRating, imdbID } = movie;

  return (
    <Card className= "movie-card" style={{ width: "18rem", marginTop: "10px", color: "black" }}>
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>
          <div>Released: {Year}</div>
          <div>Rating: {imdbRating}</div>
        </Card.Text>


       { showDelete ?(
          <div className="d-grid">
            <Button onClick={()=>{func(imdbID)}}>Delete</Button>
          </div>
          ):
          <div className="d-flex justify-content-between">
          <Button onClick={() => func("happy")} variant="danger">
            Happy
          </Button>
          <span  className = "icon" onClick={handleOnClear} variant="warning">
          <i class="fa-solid fa-circle-xmark" text-dangger></i>
          </span>
          

          <Button onClick={() => func("lazy")} variant="warning">
            Lazy
          </Button>
          
        </div>
        
}
         
      </Card.Body>
    </Card>
  )
};
