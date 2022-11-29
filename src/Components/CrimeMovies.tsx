import React from 'react'

const CrimeMovies = [

    {
        title: 'O Bar Luva Dourada',
        abstract: 'Na década de 70, os habitantes da cidade de Hamburgo sofrem quando os jornais começam a noticiar o desaparecimento sucessivo de vários cidadãos seguindo um padrão específico. Começa então uma das mais complexas investigações de assassinatos em série que o local já havia presenciado até o momento.',
        poster: 'https://www.themoviedb.org/t/p/original/wi9K8quRC3oYfFjGrO7CODR5nWC.jpg',
        logo: 'https://images.fanart.tv/fanart/the-golden-glove-5f487ed0535bc.png',
        background: 'https://www.themoviedb.org/t/p/original/c180O36twEcW4vJZgNXn0XvsRf8.jpg',
    },

    {
        title: 'Aniversário Macabro',
        abstract: 'Duas garotas vão assistir a show de rock e no caminho são atacadas por um bando de fugitivos. A vingança será orquestrada pelos pais de uma delas.',
        poster: 'https://www.themoviedb.org/t/p/original/dPKEE6bLmcJdfIO5NQjLu58muIf.jpg',
        logo: 'https://images.fanart.tv/fanart/the-last-house-on-the-left-5133e75983bd9.png',
        background: 'https://www.themoviedb.org/t/p/original/lGKSI1DhrfJHNUNtxTPTQ6AAOS4.jpg',
    },

    {
        title: 'O Maníaco',
        abstract: 'Desequilibrado mental assassina inúmeras garotas e guarda seus escalpos para adornar os inúmeros manequins que lhe fazem companhia, até o dia em que uma mulher tira uma fotografia sua no Central Park.',
        poster: 'https://www.themoviedb.org/t/p/original/xK75g27Aihc36AotDZVOf1GH7NV.jpg',
        logo: 'https://images.fanart.tv/fanart/maniac-519e9a6500f94.png',
        background: 'https://www.themoviedb.org/t/p/original/h5X5zO40G0pjPkyyzGh9PBsPI0B.jpg',
    },

    {
        title: 'O Teste Decisivo',
        abstract: 'Sete anos após a morte de sua esposa, o executivo Aoyama conta com a ajuda de seu amigo, um produtor de TV, que arma uma audição para um filme afim de escolher sua futura esposa. O viúvo fica fascinado por Yamazaki, uma jovem bela e misteriosa.',
        poster: 'https://www.themoviedb.org/t/p/original/381efRw5TlwSD598QdiKUTQYr5p.jpg',
        logo: 'https://images.fanart.tv/fanart/audition-54ff97781980e.png',
        background: 'https://www.themoviedb.org/t/p/original/aKsWYFgY3p8b4TvFGdCsJgkMA3A.jpg',
    },

    {
        title: 'A Praia do Pesadelo',
        abstract: 'Após a execução de um líder de gangue de motoqueiros condenado por assassinato, um motociclista de capacete faz uma matança durante as férias de primavera na Flórida.',
        poster: 'https://www.themoviedb.org/t/p/original/g6lCthtprfviax1iU7jOU32ckdJ.jpg',
        logo: 'https://images.fanart.tv/fanart/nightmare-beach-5ffcae65966fc.png',
        background: 'https://www.themoviedb.org/t/p/original/nLh6kLvVZ3U2AzKfx97XFiBYllX.jpg',
    },

    {
        title: 'Tenebre',
        abstract: 'O escritor Peter Neal chega à cidade de Roma para promover seu último livro, “Tenebre”, mas descobre que alguém está usando seus romances como inspiração para cometer assassinatos. Logo, ele se vê envolvido nos crimes e passa a tentar descobrir o provável assassino.',
        poster: 'https://www.themoviedb.org/t/p/original/v9E8VGoMHCMfm9T2a7AHLZ505Qh.jpg',
        logo: 'https://images.fanart.tv/fanart/tenebre-5257d4d3bd948.png',
        background: 'https://www.themoviedb.org/t/p/original/sTahRnDLZ4fDyTpBqTumMvsZLTD.jpg',
    },

    {
        title: 'Irreversível',
        abstract: 'Contado de trás para a frente, o filme narra a busca por vingança de Marcus e Pierre, depois que Alex, namorada de Marcus e ex de Pierre, é estuprada violentamente.',
        poster: 'https://www.themoviedb.org/t/p/original/rxeDxo8FvZpLu6iplNpxdtAVnfu.jpg',
        logo: 'https://images.fanart.tv/fanart/irreversible-507b13324b598.png',
        background: 'https://www.themoviedb.org/t/p/original/bl6x5Gmabg24fbzEO1Y1seTadhk.jpg',
    },

    {
        title: 'Medo',
        abstract: 'Um assassino é libertado da prisão e invade uma casa remota para matar uma mulher, seu filho deficiente e sua linda filha.',
        poster: 'https://www.themoviedb.org/t/p/original/l8wTd2hkf8CIGJ7BrhFPB5VZSOb.jpg',
        logo: 'https://images.fanart.tv/fanart/angst-602432e467f40.png',
        background: 'https://www.themoviedb.org/t/p/original/46kPXsazEkDyRKpOWk0V8GgCkPS.jpg',
    },

    {
        title: 'Rejeitados pelo Diabo',
        abstract: 'O xerife John Wydell, totalmente enlouquecido para vingar a morte de seu irmão, decide fazer justiça com as próprias mãos e persegue uma família assassina  que está foragida com a ajuda de uma dupla de caçadores de cabeças.',
        poster: 'https://www.themoviedb.org/t/p/original/yAmK6Ev2IeI8VqNbagpF3yxPOSD.jpg',
        logo: 'https://images.fanart.tv/fanart/the-devils-rejects-505b2ceea09ba.png',
        background: 'https://www.themoviedb.org/t/p/original/9OvbJLn7pMDE7bnydHjpqfly8X2.jpg',
    },

    {
        title: 'A Ilha da Morte',
        abstract: 'Um casal britânico passa as férias em uma pequena ilha grega e espalha terror ao seu redor. Ficarão impunes ou o inspetor de Londres será capaz de acabar com a sua matança?',
        poster: 'https://www.themoviedb.org/t/p/original/vWfz11ffaHL2kMja0iwz8skFsIP.jpg',
        logo: 'https://images.fanart.tv/fanart/island-of-death-5598269e49d9c.png',
        background: 'https://www.themoviedb.org/t/p/original/mEJTIt7fGYeBZw60OSPgureF5Gb.jpg',
    },

    {
        title: 'O Assassino da Furadeira',
        abstract: 'Um artista lentamente enlouquece enquanto luta para pagar suas contas, trabalhar em suas pinturas e cuidar de suas duas companheiras de quarto, o que o leva a tomar as ruas de Nova York depois de escurecer e matar moradores de rua aleatoriamente com uma furadeira.',
        poster: 'https://www.themoviedb.org/t/p/original/3avziywvIkPZR7sGerncZNRXKcm.jpg',
        logo: 'https://www.themoviedb.org/t/p/original/ckaWmlT87nnyi0lPeJk7Y56jPmM.jpg',
        background: 'https://www.themoviedb.org/t/p/original/nSGSMKVc4RO8rtXVpJxRlzXVK02.jpg'
    },

    {
        title: 'Aconteceu Perto da Sua Casa',
        abstract: 'Uma equipe de filmagens começa a acompanhar um ladrão e serial killer chamado Ben. No entanto, à medida em que vai cometendo seus atos criminosos, ele vai envolvendo toda a equipe nessa trama de sangue, tornando-os seus cúmplices.',
        poster: 'https://www.themoviedb.org/t/p/original/wFjMK1QaH8an5JcgDEDoSReQ7aL.jpg',
        logo: 'https://images.fanart.tv/fanart/man-bites-dog-4fe2648096d0d.PNG',
        background: 'https://www.themoviedb.org/t/p/original/7aoLhmBLgFGsPSoKInKwjshaDar.jpg'
    },

    
]
  

export default CrimeMovies