import React from 'react'


const Recipe = ({title, calories, image}) => {

  return(
  <div> 
    <h1> {title} </h1>
    <img src={image} alt="" /> 
    <h2> {calories}</h2>
    <h2> </h2>


  </div>)
}

export default Recipe;