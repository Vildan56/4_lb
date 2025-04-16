import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);

  
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log(response.data); 
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error); 
      });
  }, []);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const toggleFavorite = (country) => {
    const isFavorite = favorites.some(fav => fav.cca3 === country.cca3);
    let newFavorites;

    if (isFavorite) {
      newFavorites = favorites.filter(fav => fav.cca3 !== country.cca3);
    } else {
      newFavorites = [...favorites, country];
    }

    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <nav>
        <Link to="/" className="nav-link">Главная</Link>
        <Link to="/favorites" className="nav-link">Избранное</Link>
      </nav>
      <Outlet context={{ countries: filteredCountries, favorites, toggleFavorite, searchTerm, setSearchTerm }} />
    </div>
  );
}

export default App;