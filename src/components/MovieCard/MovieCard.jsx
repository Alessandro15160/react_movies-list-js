import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className="card" data-cy="movie-card">
    <img src={movie.imgUrl} alt={movie.title} data-cy="movie-poster" />
    <h2 data-cy="movie-title">{movie.title}</h2>
    <p data-cy="movie-year">{movie.year}</p>
  </div>
);
