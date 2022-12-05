import React from 'react'

const HorrorMovies = () => {
  

const horrorMovie = [
  {
    title: 'Manos: The Hands of Fate',
    abstract: 'A história é sobre uma família em férias: Michael  e Margaret, a filha Debbie e o cão Peppy, que se hospedam em um hotel na estrada que na verdade é a sede de um culto pagão nefasto.',
    poster: 'https://images.fanart.tv/fanart/manos-the-hands-of-fate-631a6831d4d74.jpg',
    logo: 'https://images.fanart.tv/fanart/manos-the-hands-of-fate-57fa95f83bb68.png',
    background: 'https://www.themoviedb.org/t/p/original/cjbIk6T7NqhX6myBGyQXU3j9ngk.jpg',
  },

  {
    title: 'Demons: Filhos das Trevas',
    abstract: 'Berlim Ocidental, Hanna e Kathy, duas jovens, vão à uma sessão de cinema de terror. No entanto, uma misteriosa máscara contamina parte dos espectadores, tornando o filme real. Os zumbis, saídos do filme, começam a perseguir os contaminados em busca de carne humana, tornando a sessão um pesadelo.',
    poster: 'https://images.fanart.tv/fanart/demons-5d25a8b0903d3.jpg',
    logo: 'https://images.fanart.tv/fanart/demons-53cb294b2ace2.png',
    background: 'https://www.themoviedb.org/t/p/original/lcAA8hfSZIJKtFtbJsILYrtotYc.jpg',
  },

  {
    title: 'Acampamento Sinistro',
    abstract: 'Assassino misterioso aterroriza visitantes e monitores de acampamento de verão.',
    poster: 'https://images.fanart.tv/fanart/sleepaway-camp-5b91bb09a4441.jpg',
    logo: 'https://images.fanart.tv/fanart/sleepaway-camp-5766feddb76de.png',
    background: 'https://www.themoviedb.org/t/p/original/92FqObwOmcJeOpAXhr0U568Gay2.jpg',
  },

  {
    title: 'Dia dos Namorados Macabro',
    abstract: 'A Delegacia da pequena cidade de Valentines Bluff recebe uma caixa de bombons contendo um coração humano. É o primeiro de uma série que chegarão para tirar o sono do xerife da anteriormente pacata localidade.',
    poster: 'https://images.fanart.tv/fanart/my-bloody-valentine-6209588f3633c.jpg',
    logo: 'https://images.fanart.tv/fanart/my-bloody-valentine-5effa66818f11.png',
    background: 'https://www.themoviedb.org/t/p/original/wso6Mld6foDdIZOdrwztLENzSjW.jpg',
  },

  {
    title: 'Maniac Cop: O Exterminador',
    abstract: 'Maniac Cop é um filme americano de 1988, dos gêneros terror e policial, dirigido por William Lustig, com roteiro de Larry Cohen.',
    poster: 'https://images.fanart.tv/fanart/maniac-cop-598ded41011a4.jpg',
    logo: 'https://images.fanart.tv/fanart/maniac-cop-5256f197cb1dd.png',
    background: 'https://www.themoviedb.org/t/p/original/cbXLVgYTapDwg0FgazJwfTeH70a.jpg',
  },

  {
    title: 'Zombie: A Volta dos Mortos',
    abstract: 'Na baía de Nova York, o guarda de um barco é atacado por um zumbi. O dono do barco é um cientista que está desaparecido em uma ilha no Caribe. Após o ocorrido, sua filha decide ir até a ilha junto com o jornalista, Peter West. No entanto, ao chegar na ilha eles descobrem que existem zumbis sedentos por carne humana.',
    poster: 'https://images.fanart.tv/fanart/zombie-5274448a0ffc6.jpg',
    logo: 'https://images.fanart.tv/fanart/zombie-51c4907388cc3.png',
    background: 'https://www.themoviedb.org/t/p/original/rNfUrodyICg0cNJ4ICTiPgDckAm.jpg',
  },

  {
    title: 'Sexta-Feira 13 - Parte 3',
    abstract: 'Um romântico verão se transforma num pesadelo de indescritível terror para mais um grupo de ingênuos monitores. Desconhecendo a sangrenta herança do acampamento Crystal Lake, um a um, eles se tornam vítimas do maníaco Jason, que os espreita a todo o momento.',
    poster: 'https://images.fanart.tv/fanart/friday-the-13th-part-3-5f2b082d42b34.jpg',
    logo: 'https://images.fanart.tv/fanart/friday-the-13th-part-3-553ed9e4ebb8a.png',
    background: 'https://www.themoviedb.org/t/p/original/dtEkXmWPRwja6CtwPFcVpuMb7tW.jpg',
  },
  
  {
    ntitle: 'Holocausto Canibal',
    abstract: 'Professor da Universidade de Nova York vai atrás de uns documentaristas perdidos, quando esses saíram para filmar na Amazônia. Lá chegando, ele descobre os horrores que eles passaram nas mãos de canibais.',
    poster: 'https://images.fanart.tv/fanart/cannibal-holocaust-517ba7dbd4037.jpg',
    logo: 'https://images.fanart.tv/fanart/cannibal-holocaust-517b7d70106c4.png',
    background: 'https://www.themoviedb.org/t/p/original/sLDbeW43iKqaq224r8Bba1OqK2m.jpg',
  },

  {
    title: 'O Mistério do Cesto',
    abstract: 'Um jovem carregando uma grande cesta que contém seu irmão gêmeo siamês extremamente deformado busca por vingança contra os médicos que os separaram contra sua vontade.',
    poster: 'https://images.fanart.tv/fanart/basket-case-5e26bb09a2a42.jpg',
    logo: 'https://images.fanart.tv/fanart/basket-case-59f3eaf75a9b7.png',
    background: 'https://www.themoviedb.org/t/p/original/fImob4dakJC07AvV1KYjAyy4I0U.jpg',
  },

  {
    title: 'O Estripador de Nova York',
    abstract: 'Um detetive nova-iorquino e um psicólogo procuram por um serial killer que fala de maneira bizarra, igual a um pato. A história se passa em uma Nova York cercada por uma atmosfera de sus- pense aterrador, onde, vítima à vítima, são todas mortas, com extrema crueldade e um sarcasmo enigmático.',
    poster: 'https://images.fanart.tv/fanart/the-new-york-ripper-5a98002d0aee8.jpg',
    logo: 'https://images.fanart.tv/fanart/the-new-york-ripper-51abfa208cd70.png',
    background: 'https://www.themoviedb.org/t/p/original/lk2QIxPrGmVmT5sQukydD1wa9Eb.jpg',
  },

  {
    title: 'Uma Noite Alucinante 2',
    abstract: 'Único sobrevivente da noite passada, Ash tenta sobreviver aos seres do livro dos mortos, ao mesmo tempo em que mais quatro visitantes se dirigem para a cabana, onde os demônios não cessam seus ataques.',
    poster: 'https://images.fanart.tv/fanart/evil-dead-ii-51bf176eea22c.jpg',
    logo: 'https://images.fanart.tv/fanart/evil-dead-ii-512c124df14e9.png',
    background: 'https://www.themoviedb.org/t/p/original/jyRk8ykqLOXaVadZ0aWRDd89gMP.jpg',
  },
  
  {
    title: 'Monster Dog:Uma Noite de Horror ',
    abstract: 'Grupo de jovens decide passar o fim de semana na casa de campo do coreógrafo Lou Lou. Quando chegam, descobrem o corpo do caseiro mutilado por cães liderados por um terrível cão monstro, daí tem início um longa noite de horror!',
    poster: 'https://images.fanart.tv/fanart/monster-dog-5b2163117f295.jpg',
    logo: 'https://images.fanart.tv/fanart/monster-dog-5728146cc8e56.png',
    background: 'https://www.themoviedb.org/t/p/original/fk7So2GJ9OeRhjj3MF9knJ8S5GX.jpg',
  },

  {
    title: 'O Abominável Dr. Phibes',
    abstract: 'Vincent Price é um homem que fica desfigurado por causa de um acidente de carro. Começa então uma série de assassinatos para vingar a morte de sua esposa.',
    poster: 'https://images.fanart.tv/fanart/the-abominable-dr-phibes-537f8b06de089.jpg',
    logo: 'https://images.fanart.tv/fanart/the-abominable-dr-phibes-537f8ac4143b9.png',
    background: 'https://www.themoviedb.org/t/p/original/12TkNIRAw7yxVRFduY2wPOptfZX.jpg',
  },

  {
    title: 'A Casa do Espanto',
    abstract: 'Roger Cobb é um romancista de terror que vive uma crise quando seu filho, Jimmy, desaparece misteriosamente durante uma visita à casa de sua tia. A morte repentina dela faz com que Roger volte para a casa onde seus pesadelos começaram.',
    poster: 'https://images.fanart.tv/fanart/house-57ca9ce0d0e87.jpg',
    logo: 'https://images.fanart.tv/fanart/house-57ca9c7314d6e.png',
    background: 'https://www.themoviedb.org/t/p/original/31gZSiqhQwMMvwH34lFRv3Vo7KS.jpg',
  },


];

return (
  <section className='trendingMovie__container'>
      <div>
          <h1 className="trendingMovie__text">Em Alta</h1>
          <div className='trendingMovie__box'>
              {horrorMovie.map((movie) => (<a key={movie.title} className="trendingMovie__poster" href=""><img                         
                  src={movie.poster}
                  alt={movie.title}/></a>

              ))}
          </div>
      </div>
  </section>
)
}





export default HorrorMovies