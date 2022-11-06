import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import BtnGroup from "react-bootstrap/ButtonGroup";
import { BtnGroups } from "./BtnGroups";
import { MovieCard } from "./MovieCard";

export const MovieList = ({ movies, handleOnDelete}) => {
  const [display,setDisplay]= useState([])

  useEffect (()=> {
   
    setDisplay(movies);
  },[movies]);

//  render all teh time -> with out dependency Array
// render one time only
// render ontime and only render if some specifi props updates



    // console.log("after use effect before html return...");

  const handleOnFilter = (str) => {
    // console.log(str);
    str === "all"
      ?setDisplay(movies)
      :setDisplay(movies.filter((item)=> item.cat ===str));
      
    };


  return (
    <div className="bg-dark p-3 rounded">
      <Row className="mt-5 ">
        <Col>
          <BtnGroups handleOnFilter={handleOnFilter}/>
          <div className="py-2">{display.length} Movies Found</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-3 d-flex justify-content-around flex-wrap ">
          {display.map((item) => (
            <MovieCard key={item.imdbID} 
            movie={item}
            showDelete={true} 
            func={handleOnDelete}/>
          ))}
        </Col>
      </Row>
    </div>
  );
  };
