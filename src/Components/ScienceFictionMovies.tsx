import React, { useState } from 'react'
import Movie from './Movie'



const ScienceFictionMovies = () => {

    const [scienceFiction, setScienceFiction] = useState([

        {
            title: 'Força Sinistra',
            abstract: 'A população de Londres está em grande perigo: uma horda de vampiros espaciais surge na cidade e começa a infectar os habitantes.',
            poster: 'https://images.fanart.tv/fanart/lifeforce-5caa94d63d280.jpg',
            logo: 'https://images.fanart.tv/fanart/lifeforce-5a7128570c001.png',
            background: 'https://www.themoviedb.org/t/p/original/8SnnGg0cqfa3bmorOERNrXvZ8Mn.jpg',
            trailer: "https://www.youtube.com/watch?v=MOF0Ov8isvI",

        },

        {
            title: 'O Vingador Tóxico',
            abstract: 'O jovem Melvin, um faxineiro paspalhão, é constantemente desprezado e humilhado pelos frequentadores de uma academia de ginástica, até o dia em que cai num tanque de lixo químico e torna-se o Vingador Tóxico, passando a perseguir gangues e corruptos da cidade.',
            poster: 'https://images.fanart.tv/fanart/the-toxic-avenger-60fe4a36e9234.jpg',
            logo: 'https://images.fanart.tv/fanart/the-toxic-avenger-52dd79fa117ba.png',
            background: 'https://www.themoviedb.org/t/p/original/uSjBSuSJcuBPkakzdn0t1YSWtbr.jpg',
            trailer: "https://www.youtube.com/watch?v=sKeONEIskWI",
        },

        {
            title: 'A Ameaça que Veio do Espaço',
            abstract: 'No interior do Arizona, um astrônomo descobre que uma espaçonave caiu no deserto, mas ninguém acredita nele. Quando moradores começam a desaparecer, ele decide investigar.',
            poster: 'https://images.fanart.tv/fanart/it-came-from-outer-space-5d47ad3d76583.jpg',
            logo: 'https://images.fanart.tv/fanart/it-came-from-outer-space-5d47ad125842f.png',
            background: 'https://www.themoviedb.org/t/p/original/l3PbIWn1K9cie3GLbomsyaSSwec.jpg',
            trailer: "https://www.youtube.com/watch?v=85xpN_Ohwqs",
        },

        {
            title: 'Plano 9 do Espaço Sideral ',
            abstract: 'Moradores de uma região da Califórnia são atacados por discos voadores. Os alienígenas pretendem conquistar o planeta ressuscitando cadáveres. Transformados em zumbis e vampiros, eles perseguem humanos que visitam o cemitério.',
            poster: 'https://images.fanart.tv/fanart/plan-9-from-outer-space-586503ecdab35.jpg',
            logo: 'https://images.fanart.tv/fanart/plan-9-from-outer-space-537c764e0b0e1.png',
            background: 'https://www.themoviedb.org/t/p/original/weOcP83sU8O5llCEoEAlEqTiYq0.jpg',
            trailer: "https://www.youtube.com/watch?v=aiZp2sXkVUg",
        },

        {
            title: 'Galáxia do Terror',
            abstract: 'No século XXIII, um grupo de astronautas vai até os confins do universo numa missão de resgaste a um sobrevivente de uma nave desaparecida. Chegando lá eles descobrem uma ameaça muito maior que começa a matar a todos.',
            poster: 'https://images.fanart.tv/fanart/galaxy-of-terror-5c15b270b8a72.jpg',
            logo: 'https://images.fanart.tv/fanart/galaxy-of-terror-5c154af57b7bc.png',
            background: 'https://www.themoviedb.org/t/p/original/lQq2XLEb3maODpyoXpbU42PzesZ.jpg',
            trailer: "https://www.youtube.com/watch?v=kZlgh_dzXjk",
        },

        {
            title: 'A Coisa',
            abstract: 'Mineradores encontram uma substância gosmenta de cheiro e sabor muito atrativos. A substância é servida como sobremesa pelo mundo todo e vira uma coqueluche. Um espião industrial tenta roubar a fórmula doce, mas descobre algo assustador.',
            poster: 'https://images.fanart.tv/fanart/the-stuff-588e54ff9262d.jpg',
            logo: 'https://images.fanart.tv/fanart/the-stuff-51a27e2aee0b2.png',
            background: 'https://www.themoviedb.org/t/p/original/l5IIxivs781wqRUuCf1EhNDyYSv.jpg',
            trailer: "https://www.youtube.com/watch?v=e_ROA_ZEGfA",
        },

        {
            title: 'King Kong vs. Godzilla',
            abstract: 'ientistas descobrem um fruto valioso numa ilha isolada, onde vive um gorila gigantesco. Mas Godzilla sai mais uma vez do mar e acaba por enfrentá-lo, depois de ambos provocarem muita destruição.',
            poster: 'https://images.fanart.tv/fanart/king-kong-vs-godzilla-623fe9b13736f.jpg',
            logo: 'https://images.fanart.tv/fanart/king-kong-vs-godzilla-52ca305d51f79.png',
            background: 'https://www.themoviedb.org/t/p/original/5nAYjMYxC8bHc7sKCFhfd6y3eMa.jpg',
            trailer: "https://www.youtube.com/watch?v=ljLQZXOUNjw",
        },

        {
            title: 'Palhaços Assassinos do Espaço Sideral',
            abstract: 'Uma pequena cidade americana recebe a inesperada visita de palhaços alienígenas, sanguinários e perversos. O que eles querem? Matar humanos!',
            poster: 'https://images.fanart.tv/fanart/killer-klowns-from-outer-space-5ce34b66c7dc6.jpg',
            logo: 'https://images.fanart.tv/fanart/killer-klowns-from-outer-space-51831159def96.png',
            background: 'https://www.themoviedb.org/t/p/original/y5qPvzwcpqaKaVmOcE7Mlhlbaqd.jpg',
            trailer: "https://www.youtube.com/watch?v=cVQ3AGzeB_0",
        },

        {
            title: 'A Bolha Assassina',
            abstract: 'Em uma cidade da Califórnia, estudantes descobrem uma estranha substância gelatinosa que derrete a carne humana. A substância começa a crescer descontroladamente atacando alguns moradores, até que uma equipe do exército é enviada para detê-la.',
            poster: 'https://images.fanart.tv/fanart/the-blob-55aeb952e3240.jpg',
            logo: 'https://images.fanart.tv/fanart/the-blob-5090540333e99.png',
            background: 'https://www.themoviedb.org/t/p/original/rz5rwV8C3q4vqZLmmniho6RYJuD.jpg',
            trailer: "https://www.youtube.com/watch?v=vq0our4mceQ",
        },

        {
            title: 'Comboio do Terror',
            abstract: 'Passagem de cometa pela órbita terrestre provoca uma rebelião de máquinas e carros contra os seres humanos, que os perseguem furiosamente até a morte.',
            poster: 'https://images.fanart.tv/fanart/maximum-overdrive-627d132fe7c11.jpg',
            logo: 'https://images.fanart.tv/fanart/maximum-overdrive-571a7535c6086.png',
            background: 'https://www.themoviedb.org/t/p/original/o70Eun17yJVhQUhGmyepPpNllMo.jpg',
            trailer: "https://www.youtube.com/watch?v=pwYcnnbiRB4",
        },

        {
            title: 'Os Donos do Amanhã',
            abstract: 'Violentos punks mandam em uma escola. Um novo professor chega e tenta mudar as coisas, mas sua mulher é estuprada. Ele se vinga matando todos.',
            poster: 'https://images.fanart.tv/fanart/class-of-1984-542c12dcb8f99.jpg',
            logo: 'https://images.fanart.tv/fanart/class-of-1984-516c37108023d.png',
            background: 'https://www.themoviedb.org/t/p/original/7ZYI4CVr6YJrJHruD6as4QT7nnf.jpg',
            trailer: "https://www.youtube.com/watch?v=6tlM1gvzOsk",
        },

        {
            title: 'Criaturas das Profundezas',
            abstract: 'Os experimentos científicos saem pela culatra e produzem mutações horríveis: metade homem, metade peixe, que aterrorizam uma pequena vila de pescadores matando os homens e estuprando as mulheres.',
            poster: 'https://images.fanart.tv/fanart/humanoids-from-the-deep-5dbe129db22bb.jpg',
            logo: 'https://images.fanart.tv/fanart/humanoids-from-the-deep-5efe34e977d79.png',
            background: 'https://www.themoviedb.org/t/p/original/hnb2wjJtxjiXOuzoNbdhn3PGTJD.jpg',
            trailer: "https://www.youtube.com/watch?v=agKmgOf_HMQ",
        },

        {
            title: 'Eles Vivem',
            abstract: 'John Nada é um homem desempregado que anda pelas ruas da cidade procurando algo para fazer. Um dia, ele encontra um óculos de sol e, por meio deles, consegue enxergar a face verdadeira das pessoas.',
            poster: 'https://images.fanart.tv/fanart/they-live-62acddfcf0f3e.jpg',
            logo: 'https://images.fanart.tv/fanart/they-live-51d70edd4040d.png',
            background: 'https://www.themoviedb.org/t/p/original/mq37KmVnHaB6MpAx1uiKBrVDrxG.jpg',
            trailer: "https://www.youtube.com/watch?v=_z9hMartaFc",
        },

        {
            title: 'Re-Animator: A Hora dos Mortos-Vivos',
            abstract: 'Hebert West (Jeffrey Combs) é um dedicado estudante da faculdade de medicina que descobre um reagente capaz de reanimar seres mortos.',
            poster: 'https://images.fanart.tv/fanart/re-animator-571a97f83a033.jpg',
            logo: 'https://images.fanart.tv/fanart/re-animator-5a977ec16e791.png',
            background: 'https://www.themoviedb.org/t/p/original/1rvIEUWPbu7leyBY5j6EuAxqTQf.jpg',
            trailer: "https://www.youtube.com/watch?v=zf-5_Je_D80",
        },


    ])

    return (
        <section>
            {scienceFiction.map(movies => {
                return <Movie key={movies.title} title={movies.title} abstract={movies.abstract} poster={movies.poster} logo={movies.logo} background={movies.background} trailer={movies.trailer} />
            })}
        </section>
    )

}

export default ScienceFictionMovies