import React from 'react'

const HorrorMovies = [
  {
    title: 'Manos: The Hands of Fate',
    abstract: 'A história é sobre uma família em férias: Michael  e Margaret, a filha Debbie e o cão Peppy, que se hospedam em um hotel na estrada que na verdade é a sede de um culto pagão nefasto.',
    poster: 'https://www.themoviedb.org/t/p/original/f7DgXSEnm9e6Bc7LA3ffmzx54rg.jpg',
    logo: 'https://images.fanart.tv/fanart/manos-the-hands-of-fate-57fa95f83bb68.png',
    background: 'https://www.themoviedb.org/t/p/original/cjbIk6T7NqhX6myBGyQXU3j9ngk.jpg',
  },

  {
    title: 'Demons: Filhos das Trevas',
    abstract: 'Berlim Ocidental, Hanna e Kathy, duas jovens, vão à uma sessão de cinema de terror. No entanto, uma misteriosa máscara contamina parte dos espectadores, tornando o filme real. Os zumbis, saídos do filme, começam a perseguir os contaminados em busca de carne humana, tornando a sessão um pesadelo.',
    poster: 'https://www.themoviedb.org/t/p/original/h1icFFIehFjZOpzl6xueBeJYMXe.jpg',
    logo: 'https://images.fanart.tv/fanart/demons-53cb294b2ace2.png',
    background: 'https://www.themoviedb.org/t/p/original/lcAA8hfSZIJKtFtbJsILYrtotYc.jpg',
  },

  {
    title: 'Robôs Assassinos',
    abstract: 'Jovens funcionários de um shopping decidem fazer uma festa no local, depois do expediente. Porém, os robôs que fazem a segurança do recinto começam a matá-los…',
    poster: 'https://www.themoviedb.org/t/p/original/snm8tScFpHymRFA3cwHEHHLlEX1.jpg',
    logo: 'https://images.fanart.tv/fanart/chopping-mall-6195429db0cd7.png',
    background: 'https://www.themoviedb.org/t/p/original/1ctiV8HodFkFOwIjQp3T2znHE19.jpg',
  },

  {
    title: 'A Noite do Terror',
    abstract: 'Durante uma escavação, um professor acidentalmente desperta zumbis etruscos que, famintos por carne humana, atacam um grupo de jovens na vizinhança.',
    poster: 'https://www.themoviedb.org/t/p/original/doxw9VThOYtIK0eDbxrQky2bfz.jpg',
    logo: 'https://images.fanart.tv/fanart/burial-ground-5aa098c823aa5.png',
    background: 'https://www.themoviedb.org/t/p/original/yw3x4a4nPgn4SA2K5rFPNAeJN99.jpg',
  },

  {
    title: 'Shakma: Fúria Assassina',
    abstract: 'Um grupo de estudantes de Medicina é atacado por um sanguinário babuíno do laboratório da Faculdade, enquanto jogam RPG após as aulas.',
    poster: 'https://www.themoviedb.org/t/p/original/aVrOi48ZJGmUPGYtFGnQtqgFSzJ.jpg',
    logo: 'https://images.fanart.tv/fanart/shakma-5596d82a62ab3.png',
    background: 'https://www.themoviedb.org/t/p/original/ze0ubeQklK4GMEAm8xN42fBQHpS.jpg',
  },

  {
    title: 'Zombie: A Volta dos Mortos',
    abstract: 'Na baía de Nova York, o guarda de um barco é atacado por um zumbi. O dono do barco é um cientista que está desaparecido em uma ilha no Caribe. Após o ocorrido, sua filha decide ir até a ilha junto com o jornalista, Peter West. No entanto, ao chegar na ilha eles descobrem que existem zumbis sedentos por carne humana.',
    poster: 'https://www.themoviedb.org/t/p/original/mIBjtQ3UiUbNzCVhMqz0F2rLz37.jpg',
    logo: 'https://images.fanart.tv/fanart/zombie-51c4907388cc3.png',
    background: 'https://www.themoviedb.org/t/p/original/rNfUrodyICg0cNJ4ICTiPgDckAm.jpg',
  },
  
  {
    ntitle: 'Holocausto Canibal',
    abstract: 'Professor da Universidade de Nova York vai atrás de uns documentaristas perdidos, quando esses saíram para filmar na Amazônia. Lá chegando, ele descobre os horrores que eles passaram nas mãos de canibais.',
    poster: 'https://www.themoviedb.org/t/p/original/q8TR9TEePfYCFNvOo85Pwcd5pO5.jpg',
    logo: 'https://images.fanart.tv/fanart/cannibal-holocaust-517b7d70106c4.png',
    background: 'https://www.themoviedb.org/t/p/original/sLDbeW43iKqaq224r8Bba1OqK2m.jpg',
  },

  {
    title: 'O Mistério do Cesto',
    abstract: 'Um jovem carregando uma grande cesta que contém seu irmão gêmeo siamês extremamente deformado busca por vingança contra os médicos que os separaram contra sua vontade.',
    poster: 'https://www.themoviedb.org/t/p/original/ciyzEBzJ1TnafkgGXr6DqEVh1wk.jpg',
    logo: 'https://images.fanart.tv/fanart/basket-case-59f3eaf75a9b7.png',
    background: 'https://www.themoviedb.org/t/p/original/fImob4dakJC07AvV1KYjAyy4I0U.jpg',
  },

  {
    title: 'As Três Máscaras do Terror',
    abstract: 'Uma trilogia de três contos de terror independentes, baseadas nos contos dos escritores Aleksei Tolstoy, Ivan Chekhov e F.G. Snyder.',
    poster: 'https://www.themoviedb.org/t/p/original/vrMcn6CKrLjWAtHHMFL7cj8A5au.jpg',
    logo: 'https://images.fanart.tv/fanart/black-sabbath-51b2d43969bde.png',
    background: 'https://www.themoviedb.org/t/p/original/kIBqjIEePsr1sFKa2sVZ1dVtAi.jpg',
  },

  {
    title: 'Uma Noite Alucinante 2',
    abstract: 'Único sobrevivente da noite passada, Ash tenta sobreviver aos seres do livro dos mortos, ao mesmo tempo em que mais quatro visitantes se dirigem para a cabana, onde os demônios não cessam seus ataques.',
    poster: 'https://www.themoviedb.org/t/p/original/n2g96s3MEJEkMjck6OSBPJRlJfe.jpg',
    logo: 'https://images.fanart.tv/fanart/evil-dead-ii-512c124df14e9.png',
    background: 'https://www.themoviedb.org/t/p/original/jyRk8ykqLOXaVadZ0aWRDd89gMP.jpg',
  },

  {
    title: 'Monster Dog:Uma Noite de Horror ',
    abstract: 'Grupo de jovens decide passar o fim de semana na casa de campo do coreógrafo Lou Lou. Quando chegam, descobrem o corpo do caseiro mutilado por cães liderados por um terrível cão monstro, daí tem início um longa noite de horror!',
    poster: 'https://www.themoviedb.org/t/p/original/aGb8qRCgTU0cQlSwBrS1w9PG2ok.jpg',
    logo: 'https://images.fanart.tv/fanart/monster-dog-5728146cc8e56.png',
    background: 'https://www.themoviedb.org/t/p/original/fk7So2GJ9OeRhjj3MF9knJ8S5GX.jpg',
  },
];

export default HorrorMovies