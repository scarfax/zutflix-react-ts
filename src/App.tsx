import React from 'react'
import "./styles/App.css"
import Header from './Components/Header'
import Highlight from './Components/Highlight'
import Footer from './Components/Footer'
import TrendingMovies from './Components/TrendingMovies'



const App = () => {
  return (
    <div>
      <Header/>
      <Highlight/>
      <TrendingMovies/>
      <Footer/>
      </div>
  )
}

export default App