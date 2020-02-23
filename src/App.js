import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID = "a3ad555a"
  const API_KEY = "b9c79644c2f78df9d76f77fc33c0fa24"
  const website = `https://api.edamam.com/search?q=chicken&app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}`
  
  useEffect(() => {
 fetchRecipe()
  })
  
  const fetchRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`)
    const data = response.json()
    console.log(data)

  }


  return (
      < div className="MainApp" >
    <h1> Hello world </h1>
    <form className="search-form">  
      <input className="search-input" type ="text" />
      <button
      className="search-button" 
      type="submit"
      >
      Search
      </button>
    </form>
    </div>
  );


}

export default App;
