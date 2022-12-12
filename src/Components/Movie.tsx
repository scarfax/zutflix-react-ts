import React from 'react'


const Movie = ({ poster, title }) => {
  return (
    <div className='movieRow'>
      <div className="movieRow__listarea">
      <div className="movieRow__list">
      <div className="movieRow__item">
      <a href="/"><img src={poster} alt={title} /></a>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Movie