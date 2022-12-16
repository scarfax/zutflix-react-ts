import { useEffect, useState } from 'react';
import "./styles/App.css"
import Header from './Components/Header'
import Highlight from './Components/Highlight'
import Footer from './Components/Footer'
import MoviesList from './Components/MoviesList';
import { MovieContextProvider } from "./contexts/MovieContext"

const App = () => {

  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div>
      <Header black={blackHeader} />
      <MovieContextProvider>
        <Highlight />
        <div className='movieList'>
          <MoviesList />
        </div>
      </MovieContextProvider>
      <Footer />
    </div>
  )
}

export default App