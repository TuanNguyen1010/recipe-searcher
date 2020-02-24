import React, {useEffect, useState} from 'react';
import './App.css';
// import fetchRecipe from './fetchRecipe'
import Recipe from './Recipe'


const App = () => {

  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
  fetchRecipe()
  }, [query])

  const fetchRecipe = async () => {
    const APP_ID = "a3ad555a"
    const API_KEY = "b9c79644c2f78df9d76f77fc33c0fa24"
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`).then(response => response.json())
    setRecipe(response.hits)
    console.log(response.hits)
  }
  
  const newSearch = e => {
    setSearch(e.target.value)
    console.log(search)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
  }

  return (
      < div className="MainApp" >
    <h1> Hello world </h1>
    <form 
    onSubmit={getSearch}
    className="search-form"
    >  
      <input className="search-input" 
      type ="text" 
      value={search} 
      onChange={newSearch}/>
      <button
      className="search-button" 
      type="submit"
      >
      Search
      </button>
    </form>
    {recipes.map(recipe => (
      <Recipe 
      key={recipe.recipe.label}
      title={recipe.recipe.label} 
      calories={recipe.recipe.calories} 
      image={recipe.recipe.image}
      />

    ))}
    </div>
  );


}

export default App;
