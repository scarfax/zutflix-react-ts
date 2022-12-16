import React from 'react';
import { Movies } from '../Constants/MovieList'
import Movie from './Movie'



const MoviesGenres = (props) => {

  const movieList = Movies.filter(movie => movie.genre === props.genre)

  return (
    <section>
      {movieList.map(movies => {
        return <Movie key={movies.title} title={movies.title} abstract={movies.abstract} poster={movies.poster} logo={movies.logo} background={movies.background} trailer={movies.trailer} />
      })}
    </section>
  )
}


export default MoviesGenres