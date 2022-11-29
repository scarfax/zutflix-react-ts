import React from 'react'

const ScienceFictionMovies = [

    {
        title: 'Força Sinistra',
        abstract: 'A população de Londres está em grande perigo: uma horda de vampiros espaciais surge na cidade e começa a infectar os habitantes.',
        poster: 'https://www.themoviedb.org/t/p/original/953hMDf9G2ZRIEs97M6iFIYWtWF.jpg',
        logo: 'https://images.fanart.tv/fanart/lifeforce-5a7128570c001.png',
        background: 'https://www.themoviedb.org/t/p/original/8SnnGg0cqfa3bmorOERNrXvZ8Mn.jpg',

    },

    {
        title: 'O Vingador Tóxico',
        abstract: 'O jovem Melvin, um faxineiro paspalhão, é constantemente desprezado e humilhado pelos frequentadores de uma academia de ginástica, até o dia em que cai num tanque de lixo químico e torna-se o Vingador Tóxico, passando a perseguir gangues e corruptos da cidade.',
        poster: 'https://www.themoviedb.org/t/p/original/9YlfBzCG95LlymVnX6Xw83P1BjK.jpg',
        logo: 'https://images.fanart.tv/fanart/the-toxic-avenger-52dd79fa117ba.png',
        background: 'https://www.themoviedb.org/t/p/original/uSjBSuSJcuBPkakzdn0t1YSWtbr.jpg',
    },

    {
        title: 'Plano 9 do Espaço Sideral ',
        abstract: 'Moradores de uma região da Califórnia são atacados por discos voadores. Os alienígenas pretendem conquistar o planeta ressuscitando cadáveres. Transformados em zumbis e vampiros, eles perseguem humanos que visitam o cemitério.',
        poster: 'https://www.themoviedb.org/t/p/original/alRm8U0dZ1xp8vOTbotiDgtHLX9.jpg',
        logo: 'https://images.fanart.tv/fanart/plan-9-from-outer-space-537c764e0b0e1.png',
        background: 'https://www.themoviedb.org/t/p/original/weOcP83sU8O5llCEoEAlEqTiYq0.jpg'
    },

    {
        title: 'Galáxia do Terror',
        abstract: 'No século XXIII, um grupo de astronautas vai até os confins do universo numa missão de resgaste a um sobrevivente de uma nave desaparecida. Chegando lá eles descobrem uma ameaça muito maior que começa a matar a todos.',
        poster: 'https://www.themoviedb.org/t/p/original/fPaEadAVgyaCP1AKHKWrQHc9sbO.jpg',
        logo: 'https://images.fanart.tv/fanart/galaxy-of-terror-5c154af57b7bc.png',
        background: 'https://www.themoviedb.org/t/p/original/lQq2XLEb3maODpyoXpbU42PzesZ.jpg',
    },

    {
        title: 'Papai Noel Conquista os Marcianos',
        abstract: 'Os marcianos sequestram o Papai Noel porque não há ninguém em Marte para dar presentes aos seus filhos.',
        poster: 'https://www.themoviedb.org/t/p/original/7GDTDDHcdf9fiIScvbVvHbLDNzJ.jpg',
        logo: 'https://images.fanart.tv/fanart/santa-claus-conquers-the-martians-52b409bb2cf08.png',
        background: 'https://www.themoviedb.org/t/p/original/jRtMuANI62nS0oOEcKyewhizFFr.jpg',
    },

    {
        title: 'King Kong vs. Godzilla',
        abstract: 'ientistas descobrem um fruto valioso numa ilha isolada, onde vive um gorila gigantesco. Mas Godzilla sai mais uma vez do mar e acaba por enfrentá-lo, depois de ambos provocarem muita destruição.',
        poster: 'https://www.themoviedb.org/t/p/original/kyYeJOvLuP9zUkslgPBFvuzbsKd.jpg',
        logo: 'https://images.fanart.tv/fanart/king-kong-vs-godzilla-52ca305d51f79.png',
        background: 'https://www.themoviedb.org/t/p/original/5nAYjMYxC8bHc7sKCFhfd6y3eMa.jpg',
    },

    {
        title: 'Palhaços Assassinos do Espaço Sideral',
        abstract: 'Uma pequena cidade americana recebe a inesperada visita de palhaços alienígenas, sanguinários e perversos. O que eles querem? Matar humanos!',
        poster: 'https://www.themoviedb.org/t/p/original/cLsvFFNCCAo99QtTtJY7h3AAkYj.jpg',
        logo: 'https://images.fanart.tv/fanart/killer-klowns-from-outer-space-51831159def96.png',
        background: 'https://www.themoviedb.org/t/p/original/y5qPvzwcpqaKaVmOcE7Mlhlbaqd.jpg',
    },

    {
        title: 'A Bolha Assassina',
        abstract: 'Em uma cidade da Califórnia, estudantes descobrem uma estranha substância gelatinosa que derrete a carne humana. A substância começa a crescer descontroladamente atacando alguns moradores, até que uma equipe do exército é enviada para detê-la.',
        poster: 'https://www.themoviedb.org/t/p/original/zXXDmz5cPuSo9LveCNjZ1j16szC.jpg',
        logo: 'https://images.fanart.tv/fanart/the-blob-5090540333e99.png',
        background: 'https://www.themoviedb.org/t/p/original/rz5rwV8C3q4vqZLmmniho6RYJuD.jpg',
    },

    {
        title: 'Calafrios',
        abstract: 'Em uma ilha canadense, um perigoso parasita se espalha entre os moradores de um condomínio residencial. Os que se infectam com o vírus, criado em laboratório, se tornam extremamente violentos e apresentam um ávido apetite sexual.',
        poster: 'https://www.themoviedb.org/t/p/original/oBn5SeA9J5xexybqqagggmRuJAR.jpg',
        logo: 'https://images.fanart.tv/fanart/shivers-5355011420ef6.png',
        background: 'https://www.themoviedb.org/t/p/original/oCCswDpRfbcdRRcyws0swF5fbTw.jpg',
    },

    {
        title: 'Trash: Náusea Total',
        abstract: 'A população de uma pequena cidade desaparece e é substituída por alienígenas que procuram carne humana para sua cadeia de fast-food.',
        poster: 'https://www.themoviedb.org/t/p/original/1ZdP3XP1J1Y64XzUP3BD0958jqk.jpg',
        logo: 'https://images.fanart.tv/fanart/bad-taste-53b44e2a6b765.png',
        background: 'https://www.themoviedb.org/t/p/original/ewacCZjc710KBjxztABTwoWMken.jpg',
    },

    {
        title: 'Shocking Dark',
        abstract: 'Em um futuro próximo, uma nuvem tóxica de poluição destrói completamente a cidade italiana de Veneza, matando todos os seus habitantes e transformando a cidade em um local inabitável.',
        poster: 'https://www.themoviedb.org/t/p/original/tztmdSyvfvQBVyzqyh6sKQeJP5g.jpg',
        logo: 'https://images.fanart.tv/fanart/shocking-dark-616804f842ba2.png',
        background: 'https://www.themoviedb.org/t/p/original/tD7wHrJDXeAhfDMjjbwwUTNw98v.jpg',
    },

    {
        title: 'Re-Animator: A Hora dos Mortos-Vivos',
        abstract: '',
        poster: 'https://www.themoviedb.org/t/p/original/3YsZhEIdyiuRSoZQaqHRmfDeGA1.jpg',
        logo: 'https://images.fanart.tv/fanart/re-animator-5a977ec16e791.png',
        background: 'https://www.themoviedb.org/t/p/original/1rvIEUWPbu7leyBY5j6EuAxqTQf.jpg',
    },


]

export default ScienceFictionMovies