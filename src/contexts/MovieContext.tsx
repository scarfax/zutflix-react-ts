import React, { createContext } from "react";


type ContextType = {
    logo: string;
    abstract: string;
    background: string;
    trailer: string;
    title: string;
}

const movieState  = {
    title: 'Uma Noite Alucinante 2',
    abstract:
      'Único sobrevivente da noite passada, Ash tenta sobreviver aos seres do livro dos mortos, ao mesmo tempo em que mais quatro visitantes se dirigem para a cabana, onde os demônios não cessam seus ataques.',
    poster: 'https://images.fanart.tv/fanart/evil-dead-ii-51bf176eea22c.jpg',
    logo: 'https://images.fanart.tv/fanart/evil-dead-ii-512c124df14e9.png',
    background:
      'https://www.themoviedb.org/t/p/original/jyRk8ykqLOXaVadZ0aWRDd89gMP.jpg',
    trailer: 'https://www.youtube.com/watch?v=s7WNgzilRBw',
}

export const MovieContext = createContext<ContextType>(movieState)

export const MovieContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <MovieContext.Provider value={movieState}>{children}</MovieContext.Provider>        
    )
}



