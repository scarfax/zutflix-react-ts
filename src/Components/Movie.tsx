import React from 'react'


const Movie = ({ title, abstract, poster, logo, background, trailer}) => {

  const handleClick = () => {
    
  }

  return (
    <div className='movieRow'>
      <div className="movieRow__listarea">
      <div className="movieRow__list">
      <div className="movieRow__item">
      <img src={poster} alt={title} onClick={handleClick} />
      </div>
      </div>
    </div>
    </div>
  )
}

export default Movie