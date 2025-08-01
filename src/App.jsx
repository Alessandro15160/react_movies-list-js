import moviesFromServer from './api/movies.json';

import { MovieList } from './components/MovieList';

import './App.scss';
// import moviesFromServer from './api/movies.json';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={moviesFromServer} />
    </div>
  </div>
);
