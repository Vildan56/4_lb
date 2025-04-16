import { useParams, useOutletContext, Link } from 'react-router-dom';

function Details() {
  const { id } = useParams(); 
  const { countries, favorites, toggleFavorite } = useOutletContext(); 

  const country = countries.find(c => c.cca3 === id) || favorites.find(c => c.cca3 === id);

  if (!country) {
    return <div>Страна не найдена</div>;
  }

  const isFavorite = favorites.some(fav => fav.cca3 === country.cca3);

  return (
    <div className="details-container">
      <h1>{country.name.common}</h1>
      <img src={country.flags.png} alt={country.name.common} />
      <p><strong>Столица:</strong> {country.capital}</p>
      <p><strong>Население:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Регион:</strong> {country.region}</p>
      <p><strong>Языки:</strong> {Object.values(country.languages).join(', ')}</p>
      <p><strong>Валюта:</strong> {Object.values(country.currencies).map(currency => currency.name).join(', ')}</p>
      <button
        onClick={() => toggleFavorite(country)}
        className={isFavorite ? "remove-from-favorites-btn" : "add-to-favorites-btn"}
      >
        {isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
      </button>
      <Link to="/" className="back-link">Назад к списку стран</Link>
    </div>
  );
}
export default Details;