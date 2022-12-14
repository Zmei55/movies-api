import { useState, useEffect, useContext } from 'react';
import MoviesContext from '../context/movies/movies-context';
import * as movieAPI from '../services/movie-api';
import { MoviesList } from '../components/MoviesList';

export default function MoviesView() {
  const [movies, setMovies] = useState(null);
  const { contextSearchQuery } = useContext(MoviesContext);

  useEffect(() => {
    if (contextSearchQuery === '') {
      return;
    }

    movieAPI
      .fetchFindMovies(contextSearchQuery)
      .then(movies => setMovies(movies.results))
      .catch();
  }, [contextSearchQuery]);

  return <>{movies && <MoviesList movies={movies} />}</>;
}
