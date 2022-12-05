import React from 'react'
import "./styles/App.css"
import Header from './Components/Header'
import Highlight from './Components/Highlight'
import Footer from './Components/Footer'
import TrendingMovies from './Components/TrendingMovies'
import ScienceFictionMovies from './Components/ScienceFictionMovies'
import HorrorMovies from './Components/HorrorMovies'
import CrimeMovies from './Components/CrimeMovies'



const App = () => {
  return (
    <div>
      <Header/>
      <Highlight/>
      <TrendingMovies/>
      <ScienceFictionMovies/>
      <HorrorMovies/>
      <CrimeMovies/>
      <Footer/>
      </div>
  )
}

export default App