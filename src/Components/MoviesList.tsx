import React from 'react'
import MoviesGenres from './MoviesGenres'

const MoviesList = () => {
  return (
  <section>
    <div id="bombando">
        <h1 className='litstMovie__text' >Em Alta</h1>
        <MoviesGenres genre="trending"/>
    </div>
    <div id="ficcaoCientifica">
        <h1 className='litstMovie__text' >Ficção científica</h1>
        <MoviesGenres genre="scienceFiction"/>
    </div>
    <div id="terror">
        <h1 className='litstMovie__text' >Terror</h1>
    <MoviesGenres genre="horror"/>
    </div>
    <div id="policial">
        <h1 className='litstMovie__text' >Policial</h1>
        <MoviesGenres genre="crime"/>
    </div>

  </section>
    
  )
}


export default MoviesList