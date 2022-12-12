import React from 'react'
import CrimeMovies from './CrimeMovies'
import HorrorMovies from './HorrorMovies'
import ScienceFictionMovies from './ScienceFictionMovies'
import TrendingMovies from './TrendingMovies'



const MoviesList = () => {
  return (
  <section>
    <div id="bombando">
        <h1 className='litstMovie__text' >Em Alta</h1>
        <TrendingMovies/>
    </div>
    <div id="ficcaoCientifica">
        <h1 className='litstMovie__text' >Ficção científica</h1>
    <ScienceFictionMovies/>
    </div>
    <div id="terror">
        <h1 className='litstMovie__text' >Terror</h1>
    <HorrorMovies/>
    </div>
    <div id="policial">
        <h1 className='litstMovie__text' >Policial</h1>
    <CrimeMovies/>
    </div>

  </section>
    
  )
}


export default MoviesList