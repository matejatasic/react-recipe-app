import React, {useState} from 'react';
import RecipeList from './RecipeList';
import $ from 'jquery';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = () => {
    if(search === '') {
      $('#alert').html(`
          <div id="alert-div">Search bar can not be empty!</div>
      `);
    
      setTimeout(() => {
        $('#alert').html('');  
      }, 5000);
    }
    else {
      $.get(`https://api.edamam.com/api/recipes/v2?q=${search}&app_key=${process.env.REACT_APP_API_KEY}&type=public&app_id=${process.env.REACT_APP_API_ID}`, (data) => {
        setRecipes(data.hits);
      });
    }
  }

  return (
    <div>
      <h1>Recipe App</h1>
      <div className="search-bar">
          <div id="alert"></div>
          <input type="text" id="search" placeholder="Type in a recipe..." onChange={(e) => setSearch(e.target.value)} />
          <button onClick={() => handleSearch()}>Search</button>
      </div>
      <RecipeList />
    </div>
  );
}

export default App;
