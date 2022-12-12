import React, { useState } from 'react'
import Movie from './Movie'

const TrendingMovies = () => {

    const [trendingMovie, SetTrendingMovie] = useState([
        {
            title: 'Invasores de Corpos',
            abstract: 'Homem percebe que seu amigos começam a agir de forma estranha. Pouco a pouco, ele vai descobrindo que os humanos estão sendo substituídos por alienígenas. Além de resistir à invasão de seu corpo, ele tem de achar uma forma de derrotar essa ameaça maligna.',
            poster: 'https://images.fanart.tv/fanart/invasion-of-the-body-snatchers-5e50635748c30.jpg',
            logo: 'https://images.fanart.tv/fanart/invasion-of-the-body-snatchers-59340431b8be1.png',
            background: 'https://www.themoviedb.org/t/p/original/b5V5rmFzFEbGiQlaKKyoj3UlSDw.jpg',
            trailer: "https://www.youtube.com/watch?v=vc_0dlmSq7I", 

        },

        {
            title: 'Videodrome: A Síndrome do Vídeo',
            abstract: 'O dono de uma pequena emissora de TV resolve ir atrás de uma atração mais subversiva para atrair audiência, quando conhece uma nova filosofia de programa: o Videodrome, cujos criadores possuem idéias bizarras e não-usuais para seu público.',
            poster: 'https://images.fanart.tv/fanart/videodrome-573b951cdeb7c.jpg',
            logo: 'https://images.fanart.tv/fanart/videodrome-51b516f76c307.png',
            background: 'https://www.themoviedb.org/t/p/original/6yDT0h8CmpYxWGdgVVSFaATRebs.jpg',
            trailer: "https://www.youtube.com/watch?v=wFRAwig4rU8", 

        },

        {
            title: 'Suspiria',
            abstract: 'Susan é uma jovem americana que viaja para a Europa para estudar numa prestigiada escola de Balé. Desde o primeiro dia, porém, ela começa a se assustar com estranhas situações que ocorrem no local que a fazem crer que há bruxas por todas a parte.',
            poster: 'https://images.fanart.tv/fanart/suspiria-60ce7d8d78514.jpg',
            logo: 'https://images.fanart.tv/fanart/suspiria-595e0acf85b4a.png',
            background: 'https://www.themoviedb.org/t/p/original/i8lyb818XNNGaXiL6qHSxVNodKy.jpg',
            trailer: "https://www.youtube.com/watch?v=hPs2ExUL_bc", 

        },

        {
            title: 'Um Lobisomem Americano em Londres',
            abstract: 'Dois estudantes americanos, David Kessler e Jack Goodman, estão à noite numa região afastada da Inglaterra, quando ouvem um uivo e são atacados por um enorme e desconhecido animal. Jack é morto e o lobo é baleado, mas David consegue sobreviver e é internado num hospital em Londres.',
            poster: 'https://images.fanart.tv/fanart/an-american-werewolf-in-london-62f324e313412.jpg',
            logo: 'https://images.fanart.tv/fanart/an-american-werewolf-in-london-5193d25d75bf1.png',
            background: 'https://www.themoviedb.org/t/p/original/4TB97m2otNBTHndhj3zZnYc4RqR.jpg',
            trailer: "https://www.youtube.com/watch?v=ArJhUEAeiw0", 

        },

        {
            title: 'O Enigma de Outro Mundo',
            abstract: 'Em expedição pela Antártida, cientistas enfrentam uma criatura alienígena que assume a forma de quem ela mata.',
            poster: 'https://images.fanart.tv/fanart/the-thing-53ed8ab8bd6b8.jpg',
            logo: 'https://images.fanart.tv/fanart/the-thing-505000eacaef8.png',
            background: 'https://www.themoviedb.org/t/p/original/r9leYNa8nTRCceZrZhP1DXkgKVb.jpg',
            trailer: "https://www.youtube.com/watch?v=eke95-lTPnY", 

        },

        {
            title: 'Psicose',
            abstract: 'Buscando meios para recomeçar sua vida, Marion Crane rouba a empresa onde trabalha. Durante a fuga, uma tempestade a obriga a pernoitar num sinistro motel de beira de estrada administrado pelo estranho Norman Bates.',
            poster: 'https://images.fanart.tv/fanart/psycho-6024d2518db3c.jpg',
            logo: 'https://images.fanart.tv/fanart/psycho-5a93b996016ca.png',
            background: 'https://www.themoviedb.org/t/p/original/jbkAZIBCfX1RW0t018mC0m6fFdo.jpg',
            trailer: "https://www.youtube.com/watch?v=Wz719b9QUqY", 

        },

        {
            title: 'O Massacre da Serra Elétrica',
            abstract: 'Conta a história de um grupo de jovens que, durante uma viagem de carro, acabam caindo no caminho de uma família de pessoas insanas, cujo filho utiliza uma serra elétrica para matar as pessoas, tratando-as como carne animal.',
            poster: 'https://images.fanart.tv/fanart/the-texas-chainsaw-massacre-5c8e68d2e4332.jpg',
            logo: 'https://images.fanart.tv/fanart/the-texas-chainsaw-massacre-509051d69bfc4.png',
            background: 'https://www.themoviedb.org/t/p/original/gDzXLz9GeJpkfEBJEdweIB0ImEe.jpg',
            trailer: "https://www.youtube.com/watch?v=BKn9QIaMgtQ", 

        },

        {
            title: 'A Hora do Pesadelo',
            abstract: 'Um jovem casal se muda para um apartamento em Nova York para começar uma família. As coisas ficam assustadoras quando Rosemary começa a suspeitar que seu futuro bebê não está seguro ao lado dos seus estranhos vizinhos.',
            poster: 'https://images.fanart.tv/fanart/a-nightmare-on-elm-street-521fc98289748.jpg',
            logo: 'https://images.fanart.tv/fanart/a-nightmare-on-elm-street-5eb91ea6d4816.png',
            background: 'https://www.themoviedb.org/t/p/original/g9ROrZey0JYp7kf8DoAyZtKnObj.jpg',
            trailer: "https://www.youtube.com/watch?v=dCVh4lBfW-c", 
        },

        {
            title: 'O Bebê de Rosemary',
            abstract: 'Um jovem casal se muda para um apartamento em Nova York para começar uma família. As coisas ficam assustadoras quando Rosemary começa a suspeitar que seu futuro bebê não está seguro ao lado dos seus estranhos vizinhos.',
            poster: 'https://images.fanart.tv/fanart/rosemarys-baby-58582fee87c0c.jpg',
            logo: 'https://images.fanart.tv/fanart/rosemarys-baby-5170432fd5db1.png',
            background: 'https://www.themoviedb.org/t/p/original/3lS8Ev8qaQcwUNbUsPYAYnUN9vg.jpg',
            trailer: "https://www.youtube.com/watch?v=dBSbmNNm84Y", 
        },

        {
            title: 'Carrie, A Estranha',
            abstract: 'A quieta e sensível adolescente Carrie White enfrenta insultos dos colegas na escola e abuso em casa de sua mãe, uma fanática religiosa. Quando estranhos acontecimentos começam a acontecer em torno de Carrie, ela começa a suspeitar que tem poderes sobrenaturais.',
            poster: 'https://images.fanart.tv/fanart/carrie-594587aa33f0c.jpg',
            logo: 'https://images.fanart.tv/fanart/carrie-52d91607f30f5.png',
            background: 'https://www.themoviedb.org/t/p/original/zwJFfKQdfiptK2GY6N8GkZFrAxJ.jpg',
            trailer: "https://www.youtube.com/watch?v=j9Mg-GRS46Y", 
        },

        {
            title: 'O Iluminado',
            abstract: 'Jack Torrance é um ex-professor que procura sossego, pois tem em mente a idéia para escrever um livro. Ele então encontra o emprego ideal: zelador do Hotel Overlook no período de inverno. Ele deve ficar no hotel, completamente isolado durante cinco meses, com sua esposa e filho.',
            poster: 'https://images.fanart.tv/fanart/the-shining-60b8b4f50aa89.jpg',
            logo: 'https://images.fanart.tv/fanart/the-shining-51651c8b47900.png',
            background: 'https://www.themoviedb.org/t/p/original/7CawDnRAjsVnWa4WApzCm0UB1sI.jpg',
            trailer: "https://www.youtube.com/watch?v=5Cb3ik6zP2I", 
        },        

        {
            title: 'Halloween - A Noite do Terror',
            abstract: 'Michael Myers é um psicopata que vive em uma instituição há 15 anos, desde quando matou sua própria irmã. Porém, ele consegue fugir de seu cativeiro e retorna à sua cidade natal para continuar seus crimes na localidade que, aterrorizada, ainda se lembra dele.',
            poster: 'https://images.fanart.tv/fanart/halloween-505cc3400c298.jpg',
            logo: 'https://images.fanart.tv/fanart/halloween-5ce022fa08a2c.png',
            background: 'https://www.themoviedb.org/t/p/original/aUGQevES3JgktXyBTH4weZcsFSP.jpg',
            trailer: "https://www.youtube.com/watch?v=n72XUX96078", 
        },

        {
            title: 'O Exorcista',
            abstract: 'Uma jovem garota (Linda Blair) é possuída pelo demônio e dois padres são chamados para exorcizá-la.',
            poster: 'https://images.fanart.tv/fanart/the-exorcist-5dc41433e678c.jpg',
            logo: 'https://images.fanart.tv/fanart/the-exorcist-5561fb4aa016a.png',
            background: 'https://www.themoviedb.org/t/p/original/w7T0BbyRWrVhJY6W6fDx8X6ektP.jpg',
            trailer: "https://www.youtube.com/watch?v=cGAZPUKw3lU", 
        },

        {
            title: 'Despertar dos Mortos',
            abstract: 'Em plena crise mundial provocada por um ataque de zumbis, um grupo de pessoas refugia-se em um grande shopping center, aproveitando-se das mercadorias das lojas ao mesmo tempo em que tentam permanecer vivos.',
            poster: 'https://images.fanart.tv/fanart/dawn-of-the-dead-5851973b7d109.jpg',
            logo: 'https://images.fanart.tv/fanart/dawn-of-the-dead-50569a95d0b20.png',
            background: 'https://www.themoviedb.org/t/p/original/sWQm8rKFZwEnE1i3VaQNfPZxNEB.jpg',
            trailer: "https://www.youtube.com/watch?v=Y_EviQj5tvA", 
        },

    ])

    return (
        <section>
            {trendingMovie.map(movies => {
                return <Movie key={movies.title} title={movies.title} abstract={movies.abstract} poster={movies.poster} logo={movies.logo} background={movies.background} trailer={movies.trailer} />
            })}
        </section>
    )
}

export default TrendingMovies


