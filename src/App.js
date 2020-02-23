import React from 'react';
import './App.css';

const App = () => {

  const website = `https://api.edamam.com/search?q=chicken&app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}`

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
