import React, {useEffect, useState} from 'react';
import './App.css';
import fetchRecipe from './fetchRecipe'

const App = () => {
    
  useEffect(() => {
 fetchRecipe()
  })

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
