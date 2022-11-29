import React from 'react'

const TrendingMovies = [
{
    title: 'Invasores de Corpos',
    abstract: 'Homem percebe que seu amigos começam a agir de forma estranha. Pouco a pouco, ele vai descobrindo que os humanos estão sendo substituídos por alienígenas. Além de resistir à invasão de seu corpo, ele tem de achar uma forma de derrotar essa ameaça maligna.',
    poster: 'https://www.themoviedb.org/t/p/original/skS02wdeH2C0nrbCQP3qKwJdZtZ.jpg',
    logo: 'https://images.fanart.tv/fanart/invasion-of-the-body-snatchers-59340431b8be1.png',
    background: 'https://www.themoviedb.org/t/p/original/b5V5rmFzFEbGiQlaKKyoj3UlSDw.jpg',

},

{
    title: 'Videodrome: A Síndrome do Vídeo',
    abstract: 'O dono de uma pequena emissora de TV resolve ir atrás de uma atração mais subversiva para atrair audiência, quando conhece uma nova filosofia de programa: o Videodrome, cujos criadores possuem idéias bizarras e não-usuais para seu público.',
    poster: 'https://www.themoviedb.org/t/p/original/sQBTBWZmqvH49T4NLGD1I7ODJGg.jpg',
    logo: 'https://images.fanart.tv/fanart/videodrome-51b516f76c307.png',
    background: 'https://www.themoviedb.org/t/p/original/6yDT0h8CmpYxWGdgVVSFaATRebs.jpg',

},

{
    title: 'Suspiria',
    abstract: 'Susan é uma jovem americana que viaja para a Europa para estudar numa prestigiada escola de Balé. Desde o primeiro dia, porém, ela começa a se assustar com estranhas situações que ocorrem no local que a fazem crer que há bruxas por todas a parte.',
    poster: 'https://www.themoviedb.org/t/p/original/8EsopdJZbHk2UvFHuwDuGkTaWOn.jpg',
    logo: 'https://images.fanart.tv/fanart/suspiria-595e0acf85b4a.png',
    background: 'https://www.themoviedb.org/t/p/original/i8lyb818XNNGaXiL6qHSxVNodKy.jpg',

},

{
    title: 'Um Lobisomem Americano em Londres',
    abstract: 'Dois estudantes americanos, David Kessler e Jack Goodman, estão à noite numa região afastada da Inglaterra, quando ouvem um uivo e são atacados por um enorme e desconhecido animal. Jack é morto e o lobo é baleado, mas David consegue sobreviver e é internado num hospital em Londres.',
    poster: 'https://www.themoviedb.org/t/p/original/iMx9tACNugTyklKN2IYcmGylTvT.jpg',
    logo: 'https://images.fanart.tv/fanart/an-american-werewolf-in-london-5193d25d75bf1.png',
    background: 'https://www.themoviedb.org/t/p/original/4TB97m2otNBTHndhj3zZnYc4RqR.jpg',

},

{
    title: 'O Enigma de Outro Mundo',
    abstract: 'Em expedição pela Antártida, cientistas enfrentam uma criatura alienígena que assume a forma de quem ela mata.',
    poster: 'https://www.themoviedb.org/t/p/original/tzGY49kseSE9QAKk47uuDGwnSCu.jpg',
    logo: 'https://images.fanart.tv/fanart/the-thing-505000eacaef8.png',
    background: 'https://www.themoviedb.org/t/p/original/r9leYNa8nTRCceZrZhP1DXkgKVb.jpg',

},

{
    title: 'Psicose',
    abstract: 'Buscando meios para recomeçar sua vida, Marion Crane rouba a empresa onde trabalha. Durante a fuga, uma tempestade a obriga a pernoitar num sinistro motel de beira de estrada administrado pelo estranho Norman Bates.',
    poster: 'https://www.themoviedb.org/t/p/original/vvExrsLBUz7bUu1tlMZqKPA6T8K.jpg',
    logo: 'https://images.fanart.tv/fanart/psycho-5a93b996016ca.png',
    background: 'https://www.themoviedb.org/t/p/original/jbkAZIBCfX1RW0t018mC0m6fFdo.jpg',

},

{
    title: 'O Massacre da Serra Elétrica',
    abstract: 'Conta a história de um grupo de jovens que, durante uma viagem de carro, acabam caindo no caminho de uma família de pessoas insanas, cujo filho utiliza uma serra elétrica para matar as pessoas, tratando-as como carne animal.',
    poster: 'https://www.themoviedb.org/t/p/original/e00AfCK1ISGVImmXPC1wrR6F5OI.jpg',
    logo: 'https://images.fanart.tv/fanart/the-texas-chainsaw-massacre-509051d69bfc4.png',
    background: 'https://www.themoviedb.org/t/p/original/gDzXLz9GeJpkfEBJEdweIB0ImEe.jpg',

},

{
    title: 'O Bebê de Rosemary',
    abstract: 'Um jovem casal se muda para um apartamento em Nova York para começar uma família. As coisas ficam assustadoras quando Rosemary começa a suspeitar que seu futuro bebê não está seguro ao lado dos seus estranhos vizinhos.',
    poster: 'https://www.themoviedb.org/t/p/original/tSD0ddrw8HdpH7Lq555Qkaalx5Q.jpg',
    logo: 'https://images.fanart.tv/fanart/rosemarys-baby-5170432fd5db1.png',
    background: 'https://www.themoviedb.org/t/p/original/3lS8Ev8qaQcwUNbUsPYAYnUN9vg.jpg',

},

{
    title: 'O Iluminado',
    abstract: 'Jack Torrance é um ex-professor que procura sossego, pois tem em mente a idéia para escrever um livro. Ele então encontra o emprego ideal: zelador do Hotel Overlook no período de inverno. Ele deve ficar no hotel, completamente isolado durante cinco meses, com sua esposa e filho.',
    poster: 'https://www.themoviedb.org/t/p/original/xazWoLealQwEgqZ89MLZklLZD3k.jpg',
    logo: 'https://images.fanart.tv/fanart/the-shining-51651c8b47900.png',
    background: 'https://www.themoviedb.org/t/p/original/7CawDnRAjsVnWa4WApzCm0UB1sI.jpg',

},

{
    title: 'Halloween - A Noite do Terror',
    abstract: 'Michael Myers é um psicopata que vive em uma instituição há 15 anos, desde quando matou sua própria irmã. Porém, ele consegue fugir de seu cativeiro e retorna à sua cidade natal para continuar seus crimes na localidade que, aterrorizada, ainda se lembra dele.',
    poster: 'https://www.themoviedb.org/t/p/original/iB3Xh9U01riZduXB9sndDACBWoC.jpg',
    logo: 'https://images.fanart.tv/fanart/halloween-5ce022fa08a2c.png',
    background: 'https://www.themoviedb.org/t/p/original/aUGQevES3JgktXyBTH4weZcsFSP.jpg',

},

{
    title: 'O Exorcista',
    abstract: 'Uma jovem garota (Linda Blair) é possuída pelo demônio e dois padres são chamados para exorcizá-la.',
    poster: 'https://www.themoviedb.org/t/p/original/8P6RoquiGjoLYli6dVBRLH3kd7M.jpg',
    logo: 'https://images.fanart.tv/fanart/the-exorcist-5561fb4aa016a.png',
    background: 'https://www.themoviedb.org/t/p/original/w7T0BbyRWrVhJY6W6fDx8X6ektP.jpg',

},

{
    title: 'Despertar dos Mortos',
    abstract: 'Em plena crise mundial provocada por um ataque de zumbis, um grupo de pessoas refugia-se em um grande shopping center, aproveitando-se das mercadorias das lojas ao mesmo tempo em que tentam permanecer vivos.',
    poster: 'https://www.themoviedb.org/t/p/original/h6aVbUsiJB3Le1xrhyZXsXZOI3h.jpg',
    logo: 'https://images.fanart.tv/fanart/dawn-of-the-dead-50569a95d0b20.png',
    background: 'https://www.themoviedb.org/t/p/original/sWQm8rKFZwEnE1i3VaQNfPZxNEB.jpg',

},


]

export default TrendingMovies