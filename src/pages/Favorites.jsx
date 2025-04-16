import { useOutletContext, Link } from 'react-router-dom';

function Favorites() {
  const { favorites, toggleFavorite } = useOutletContext();

  return (
    <div>
      <h1>Избранные страны</h1>
      <div className="favorites-grid">
        {favorites.map(country => {
          const isFavorite = favorites.some(fav => fav.cca3 === country.cca3);
          return (
            <div key={country.cca3} className="country-card">
              <Link to={`/details/${country.cca3}`} className="country-link">
                <img src={country.flags.png} alt={country.name.common} />
                <h2>{country.name.common}</h2>
              </Link>
              <button
                onClick={() => toggleFavorite(country)}
                className={isFavorite ? "remove-from-favorites-btn" : "add-to-favorites-btn"}
              >
                {isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Favorites;