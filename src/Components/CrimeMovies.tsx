import React, { useState } from 'react'
import Movie from './Movie'


const CrimeMovies = () => {

    const [crimeMovie, setCrimeMovie] = useState([

        {
            title: 'O Bar Luva Dourada',
            abstract: 'Na década de 70, os habitantes da cidade de Hamburgo sofrem quando os jornais começam a noticiar o desaparecimento sucessivo de vários cidadãos seguindo um padrão específico. Começa então uma das mais complexas investigações de assassinatos em série que o local já havia presenciado até o momento.',
            poster: 'https://images.fanart.tv/fanart/the-golden-glove-620855ffceb1c.jpg',
            logo: 'https://images.fanart.tv/fanart/the-golden-glove-5f487ed0535bc.png',
            background: 'https://www.themoviedb.org/t/p/original/c180O36twEcW4vJZgNXn0XvsRf8.jpg',
            trailer: "https://www.youtube.com/watch?v=vQpQ2rWFlYc",
        },

        {
            title: 'Aniversário Macabro',
            abstract: 'Duas garotas vão assistir a show de rock e no caminho são atacadas por um bando de fugitivos. A vingança será orquestrada pelos pais de uma delas.',
            poster: 'https://images.fanart.tv/fanart/the-last-house-on-the-left-5182f1f8b1ce2.jpg',
            logo: 'https://images.fanart.tv/fanart/the-last-house-on-the-left-5133e75983bd9.png',
            background: 'https://www.themoviedb.org/t/p/original/lGKSI1DhrfJHNUNtxTPTQ6AAOS4.jpg',
            trailer: "https://www.youtube.com/watch?v=gftu8RjqJ_o",
        },

        {
            title: 'O Maníaco',
            abstract: 'Desequilibrado mental assassina inúmeras garotas e guarda seus escalpos para adornar os inúmeros manequins que lhe fazem companhia, até o dia em que uma mulher tira uma fotografia sua no Central Park.',
            poster: 'https://images.fanart.tv/fanart/maniac-60d161d8006e2.jpg',
            logo: 'https://images.fanart.tv/fanart/maniac-519e9a6500f94.png',
            background: 'https://www.themoviedb.org/t/p/original/h5X5zO40G0pjPkyyzGh9PBsPI0B.jpg',
            trailer: "https://www.youtube.com/watch?v=Pxsmw8nmNkU",
        },

        {
            title: 'O Teste Decisivo',
            abstract: 'Sete anos após a morte de sua esposa, o executivo Aoyama conta com a ajuda de seu amigo, um produtor de TV, que arma uma audição para um filme afim de escolher sua futura esposa. O viúvo fica fascinado por Yamazaki, uma jovem bela e misteriosa.',
            poster: 'https://images.fanart.tv/fanart/audition-5fdccc027c6e1.jpg',
            logo: 'https://images.fanart.tv/fanart/audition-54ff97781980e.png',
            background: 'https://www.themoviedb.org/t/p/original/aKsWYFgY3p8b4TvFGdCsJgkMA3A.jpg',
            trailer: "https://www.youtube.com/watch?v=EBQHp2__AVQ",
        },

        {
            title: 'Desejo de Matar',
            abstract: 'Após ter sua mulher assassinada e sua filha estuprada por um bando de criminosos, Paul Kersey decide ir às ruas para fazer justiça com as próprias mãos e eliminar todos os bandidos que encontrar.',
            poster: 'https://images.fanart.tv/fanart/death-wish-5d2431d643943.jpg',
            logo: 'https://images.fanart.tv/fanart/death-wish-5d2579a7a8b46.png',
            background: 'https://www.themoviedb.org/t/p/original/91CbIfKCy7UvtmMC5UfvX3WGeBL.jpg',
            trailer: "https://www.youtube.com/watch?v=9OPrXv1t9cg",
        },

        {
            title: 'Tenebre',
            abstract: 'O escritor Peter Neal chega à cidade de Roma para promover seu último livro, “Tenebre”, mas descobre que alguém está usando seus romances como inspiração para cometer assassinatos. Logo, ele se vê envolvido nos crimes e passa a tentar descobrir o provável assassino.',
            poster: 'https://images.fanart.tv/fanart/tenebre-605ae340575ea.jpg',
            logo: 'https://images.fanart.tv/fanart/tenebre-5257d4d3bd948.png',
            background: 'https://www.themoviedb.org/t/p/original/sTahRnDLZ4fDyTpBqTumMvsZLTD.jpg',
            trailer: "https://www.youtube.com/watch?v=WiS5T9UbSEc",
        },

        {
            title: 'Irreversível',
            abstract: 'Contado de trás para a frente, o filme narra a busca por vingança de Marcus e Pierre, depois que Alex, namorada de Marcus e ex de Pierre, é estuprada violentamente.',
            poster: 'https://images.fanart.tv/fanart/irreversible-55b2add955450.jpg',
            logo: 'https://images.fanart.tv/fanart/irreversible-507b13324b598.png',
            background: 'https://www.themoviedb.org/t/p/original/bl6x5Gmabg24fbzEO1Y1seTadhk.jpg',
            trailer: "https://www.youtube.com/watch?v=d3qNrABvkjg",
        },

        {
            title: 'Medo',
            abstract: 'Um assassino é libertado da prisão e invade uma casa remota para matar uma mulher, seu filho deficiente e sua linda filha.',
            poster: 'https://images.fanart.tv/fanart/angst-63559d779f0e0.jpg',
            logo: 'https://images.fanart.tv/fanart/angst-602432e467f40.png',
            background: 'https://www.themoviedb.org/t/p/original/46kPXsazEkDyRKpOWk0V8GgCkPS.jpg',
            trailer: "https://www.youtube.com/watch?v=P5MSigtzSjY",

        },

        {
            title: 'Dublê de Corpo',
            abstract: 'Um ator desempregado vai cuidar da casa do seu amigo. Instalado lá, se pega obcecado pela vizinha que possui o estranho hábito de deixar a janela aberta. Percebendo que ela está em apuros, tenta ajudá-la.',
            poster: 'https://images.fanart.tv/fanart/body-double-56af78825225d.jpg',
            logo: 'https://images.fanart.tv/fanart/body-double-529c60973aae0.png',
            background: 'https://www.themoviedb.org/t/p/original/e2aiOGR8jZIr94haC5u1jJiXKPc.jpg',
            trailer: "https://www.youtube.com/watch?v=vMG8V7Am8zI",
        },

        {
            title: 'Assassinos por Natureza',
            abstract: 'Eles não ganharam um Prêmio Nobel, nem bateram algum recorde esportivo ou sequer trilharam algum caminho aceitável a fama. O que o casal fugitivo Mickey e Mallory fizeram foi matar pessoas. Muitas pessoas. A mídia se encarregou do resto.',
            poster: 'https://images.fanart.tv/fanart/natural-born-killers-51e1d5c30cf00.jpg',
            logo: 'https://images.fanart.tv/fanart/natural-born-killers-5059da1eda340.png',
            background: 'https://www.themoviedb.org/t/p/original/gGQvvkgiYf35FbG3K5Cw75m7KGt.jpg',
            trailer: "https://www.youtube.com/watch?v=XJyLi-3qsDs",
        },

        {
            title: 'Rejeitados pelo Diabo',
            abstract: 'O xerife John Wydell, totalmente enlouquecido para vingar a morte de seu irmão, decide fazer justiça com as próprias mãos e persegue uma família assassina  que está foragida com a ajuda de uma dupla de caçadores de cabeças.',
            poster: 'https://images.fanart.tv/fanart/the-devils-rejects-5834c15811c4d.jpg',
            logo: 'https://images.fanart.tv/fanart/the-devils-rejects-505b2ceea09ba.png',
            background: 'https://www.themoviedb.org/t/p/original/9OvbJLn7pMDE7bnydHjpqfly8X2.jpg',
            trailer: "https://www.youtube.com/watch?v=poxddLZq2k0",
        },

        {
            title: 'Vício Frenético',
            abstract: 'Enquanto investiga o estupro de uma jovem freira, um detetive corrupto da polícia de Nova Iorque com um grave vício em drogas e jogos de azar, tenta mudar seus caminhos e encontrar o perdão e a redenção.',
            poster: 'https://images.fanart.tv/fanart/bad-lieutenant-588083210ba88.jpg',
            logo: 'https://images.fanart.tv/fanart/bad-lieutenant-50bfd9757f6c0.png',
            background: 'https://www.themoviedb.org/t/p/original/usT9QCFIs3NZRvvldIrFPTsln80.jpg',
            trailer: "https://www.youtube.com/watch?v=3dQwWyWCD5M",
        },

        {
            title: 'Ruas Selvagens',
            abstract: 'Uma adolescente procura se vingar de um grupo de rebeldes que violentaram sua irmã deficiente e mataram seu melhor amigo.',
            poster: 'https://images.fanart.tv/fanart/savage-streets-5b82923db3232.jpg',
            logo: 'https://images.fanart.tv/fanart/savage-streets-519e9848811c1.png',
            background: 'https://www.themoviedb.org/t/p/original/mYGxfMf1Nc4xmkRPawvdI3mg8l9.jpg',
            trailer: "https://www.youtube.com/watch?v=nM6gkTY2IJY",
        },

        {
            title: 'Aconteceu Perto da Sua Casa',
            abstract: 'Uma equipe de filmagens começa a acompanhar um ladrão e serial killer chamado Ben. No entanto, à medida em que vai cometendo seus atos criminosos, ele vai envolvendo toda a equipe nessa trama de sangue, tornando-os seus cúmplices.',
            poster: 'https://images.fanart.tv/fanart/man-bites-dog-54be9a3fb071b.jpg',
            logo: 'https://images.fanart.tv/fanart/man-bites-dog-4fe2648096d0d.PNG',
            background: 'https://www.themoviedb.org/t/p/original/7aoLhmBLgFGsPSoKInKwjshaDar.jpg',
            trailer: "https://www.youtube.com/watch?v=FjPFmIX-o_c", 
        },

    ])

    return (
        <section>
            {crimeMovie.map(movies => {
                return <Movie key={movies.title} title={movies.title} abstract={movies.abstract} poster={movies.poster} logo={movies.logo} background={movies.background} trailer={movies.trailer} />
            })}
        </section>
    )


}

export default CrimeMovies