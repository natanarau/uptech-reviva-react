// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ProductTypes } from 'types'

export default function DataProducts(req: NextApiRequest, res: NextApiResponse<ProductTypes[]>) {
  if(req.method === 'GET') {
    res.status(200).json([
      {
        id: 1,
        nome: 'VESTIDO MIDI PLUS SIZE FEMININO ABERTO UMA MARIA LISO MARROM FILIPA BY RIACHUELO',
        url: 'vestido-midi-plus-size-feminino-aberto-uma-maria-liso-marrom-filipa-by-riachuelo',
        preco: 259.9,
        categoria: 1,
        descricao:
          'O Vestido Midi Plus Size Feminino Aberto Uma Maria Liso Marrom Filipa by Riachuelo foi confeccionado em malha macia, uma ótima escolha para quem está em busca de conforto e segurança. Além de contar com mangas 3/4 e abertura frontal por botões . Perfeito para usar na suas ocasiões preferidas ou usar no dia a dia. Aposte!',
        tamanhos_disponiveis: ['P', 'M', 'G'],
        quantidade_disponivel: 20,
        carrinho: 0,
        total: 259.9,
        imagens: [
          {
            url: 'https://static.riachuelo.com.br/RCHLO/14595150003/portrait/47b6bc1baa2696ab9e414de591d2ccaf96f2d25b.jpg?imwidth=700',
            url2: 'https://static.riachuelo.com.br/RCHLO/14595150004/portrait/ad15e338997af4e6e75793bd4f0694f868c3febb.jpg?imwidth=700',
            url3: 'https://static.riachuelo.com.br/RCHLO/14595150004/portrait/a6ed1b2ee6ab3f0ae1ee6bdfb0b1e6e118dc12ee.jpg?imwidth=700',
            url4: 'https://static.riachuelo.com.br/RCHLO/14595150004/portrait/43f27986356c977ca9c81e11c3d54fc9615b7fbf.jpg?imwidth=700',
            descricao: 'Vestido midi plus',
          },
        ],
      },
      {
        id: 2,
        nome: 'Camiseta Manga Curta Free Fire Branco',
        url: 'camiseta-feminina-manga-curta-free-fire-branco',
        preco: 79.9,
        categoria: 1,
        descricao:
          'A Camiseta Manga Curta Free Fire Branco é produzida em fibra natural, sendo muito macia e confortável. Com modelagem regular, o diferencial da peça é a estampa temática do jogo Free Fire. As peças estampadas são sempre uma boa escolha na hora de compor um look mais despojado. Aposte!',
        tamanhos_disponiveis: ['P', 'M', 'G'],
        quantidade_disponivel: 15,
        carrinho: 0,
        total: 79.9,
        imagens: [
          {
            url: 'https://static.riachuelo.com.br/RCHLO/14594536001/portrait/f0140498a034437cada79415e8a255ebe52b2f18.jpg?imwidth=700',
            url2: 'https://static.riachuelo.com.br/RCHLO/14594536001/portrait/283e4e6fae6bc391f2d285ba9364ddfe1c5c33dd.jpg?imwidth=700',
            url3: 'https://static.riachuelo.com.br/RCHLO/14594536001/portrait/f0140498a034437cada79415e8a255ebe52b2f18.jpg?imwidth=700',
            url4: 'https://static.riachuelo.com.br/RCHLO/14594536001/portrait/a20487df3d367f53fc06d62d768ca7e95b33deb5.jpg?imwidth=700',
            descricao: 'Camiseta manga curta free fire branco',
          },
        ],
      },
      {
        id: 3,
        nome: 'Suéter Feminino Curto Tricot Liso Verde Pool Basics by Riachuelo',
        url: 'sueter-feminino-curto-tricot-liso-verde-pool-basics-by-riachuelo',
        preco: 99.9,
        categoria: 1,
        descricao:
          'O Suéter Feminino Curto Tricot Liso Verde Pool Basics by Riachuelo, confeccionado em tricot, ideal para os dias mais frios. Possui modelo fechado e mangas longas. Perfeito para os dias de temperatura baixa, use sobre regatas e combine com calças de fit ajustado e sapatilhas.',
        tamanhos_disponiveis: ['P', 'M', 'G'],
        quantidade_disponivel: 13,
        carrinho: 0,
        total: 99.9,
        imagens: [
          {
            url: 'https://static.riachuelo.com.br/RCHLO/14380226005/portrait/14ed05dd6b3dd0307140279eb7f538725d368e9a.jpg?imwidth=700',
            url2: 'https://static.riachuelo.com.br/RCHLO/14380226002/portrait/c98511be9d9c6970c1c1b861b642e6539508b7f3.jpg?imwidth=700',
            url3: 'https://static.riachuelo.com.br/RCHLO/14380226002/portrait/986f8949597f9725212245cbb6c171fa456fcefe.jpg?imwidth=700',
            url4: 'https://static.riachuelo.com.br/RCHLO/14380226002/portrait/0549e8766c5a8469ff0ee6a942b505e53e76ae7f.jpg?imwidth=700',
            descricao: 'Suéter Feminino Curto Tricot Liso Verde',
          },
        ],
      },
      {
        id: 4,
        nome: 'Blusa Feminina Manga Longa Texturizada Branco AK by Riachuelo',
        url: 'blusa-feminina-manga-longa-texturizada-branco-ak-by-riachuelo',
        preco: 69.9,
        categoria: 1,
        descricao:
          'A Blusa Feminina Manga Longa Texturizada Branco AK by Riachuelo vai se tornar sua peça preferida! Confeccionada em malha texturizada, a peça é super versátil, agregando estilo e conforto ao seu closet!',
        tamanhos_disponiveis: ['P', 'M', 'G'],
        quantidade_disponivel: 43,
        carrinho: 0,
        total: 69.9,
        imagens: [
          {
            url: 'https://static.riachuelo.com.br/RCHLO/14599970002/portrait/d4eabaf2cb2c65ed21bdeccf0055d775dc4367b6.jpg?imwidth=700',
            url2: 'https://static.riachuelo.com.br/RCHLO/14599970002/portrait/7b1e58e74bd2010f52a3d9e8c6223e42318ffcac.jpg?imwidth=700',
            url3: 'https://static.riachuelo.com.br/RCHLO/14599970002/portrait/711c433097bca5c4ee74d190f29350d50faf82d7.jpg?imwidth=700',
            url4: 'https://static.riachuelo.com.br/RCHLO/14599970002/portrait/d2088dc4ce828e0bf9d05108197a9819bd7ac58e.jpg?imwidth=700',
            descricao: 'Blusa Feminina Manga Longa Texturizada Branco AK by',
          },
        ],
      },
      {
        id: 5,
        nome: 'Bermuda Água Masculina Tactel Verão Rosa Antigo Pool by Riachuelo',
        url: 'bermuda-agua-masculina-tactel-ver-o-rosa-antigo-pool-by-riachuelo',
        preco: 39.9,
        categoria: 2,
        descricao:
          'Básica e casual, a Bermuda Água Masculina Tactel Verão Rosa Antigo Pool by Riachuelo é o toque de estilo ao seu look praia. Confeccionada em tactel, possui uma estilosa estampa com temática de verão, dando o toque despojado que seu look de praia precisa! Aposte em uma regata e chinelos slides para um look confortável!',
        tamanhos_disponiveis: ['P', 'M', 'G'],
        quantidade_disponivel: 21,
        carrinho: 0,
        total: 39.9,
        imagens: [
          {
            url: 'https://static.riachuelo.com.br/RCHLO/14303930004/portrait/756df1ab14a4829609dd0be9d692a5c2594dddef.jpg?imwidth=700',
            url2: 'https://static.riachuelo.com.br/RCHLO/14303930004/portrait/0befaa6db58cdfa92d652adcd6636621e67cf1b5.jpg?imwidth=700',
            url3: 'https://static.riachuelo.com.br/RCHLO/14303930004/portrait/cf61f949ebcc1231986ea29dbf7f6ae1bfbaa190.jpg?imwidth=700',
            url4: 'https://static.riachuelo.com.br/RCHLO/14303930004/portrait/d8ba26aa9f6fb16f18e8881c5a67b169111c131e.jpg?imwidth=700',
            descricao: 'Bermuda Água Masculina Tactel Verão Rosa Básica e casual',
          },
        ],
      },
      {
        id: 6,
        nome: 'Maiô Tradicional Verão Azul Turquesa Dript by Riachuelo',
        url: 'maio-tradicional-ver-o-azul-turquesa-dript-by-riachuelo',
        preco: 99.9,
        categoria: 2,
        descricao:
          'Confeccionado em malha macia, o Maiô Tradicional Verão Azul Turquesa Dript by Riachuelo é uma ótima pedida para curtir os momentos de lazer na praia ou piscina. Com modelagem tradicional, apresenta estampa frontal e alças com regulagem. Combine com um saída de praia para os melhores dias de sol.',
        tamanhos_disponiveis: ['P', 'M', 'G'],
        quantidade_disponivel: 29,
        carrinho: 0,
        total: 99.9,
        imagens: [
          {
            url: 'https://static.riachuelo.com.br/RCHLO/14106116004/portrait/180bbff6bbf9b6b492095e3a664c748f81d1e095.jpg?imwidth=700',
            url2: 'https://static.riachuelo.com.br/RCHLO/14106116001/portrait/80a90e0820a76138ffa20963fa292a756e8884ad.jpg?imwidth=700',
            url3: 'https://static.riachuelo.com.br/RCHLO/14106116001/portrait/452b67b4ea744072a4ef85db1c2e0b97fa242b9d.jpg?imwidth=700',
            url4: 'https://static.riachuelo.com.br/RCHLO/14106116001/portrait/5c2262c62720c2a0a4b19b02885981992a05a157.jpg?imwidth=700',
            descricao: 'Maiô Tradicional Verão Azul',
          },
        ],
      },
      {
        id: 7,
        nome: 'Regata Masculina Malha Verão Branco Pool by Riachuelo',
        url: 'regata-masculina-malha-ver-o-branco-pool-by-riachuelo',
        preco: 49.9,
        categoria: 2,
        descricao:
          'A Regata Masculina Malha Verão Branco Pool by Riachuelo é produzida em fibra natural, sendo muito macia e confortável. Com modelagem regular, o diferencial da peça é a padronagem com temática de verão. As peças estampadas são sempre uma boa escolha na hora de compor um look mais despojado. Aposte! Combine com uma bermuda de sarja e tênis para um visual casual.',
        tamanhos_disponiveis: ['P', 'M', 'G'],
        quantidade_disponivel: 22,
        carrinho: 0,
        total: 49.9,
        imagens: [
          {
            url: 'https://static.riachuelo.com.br/RCHLO/14463342005/portrait/7e9ce6e2b121b7a1b324855ca7eb2aaaaf22d561.jpg?imwidth=700',
            url2: 'https://static.riachuelo.com.br/RCHLO/14463342005/portrait/4f4fc2b5e8a8de4bad9a04340bb908c341bced29.jpg?imwidth=700',
            url3: 'https://static.riachuelo.com.br/RCHLO/14463342005/portrait/89bab0d7ff23943a9d762343170805e190c1a67d.jpg?imwidth=700',
            url4: 'https://static.riachuelo.com.br/RCHLO/14463342005/portrait/0dfbd5630159cef5bfba11fbf18ccbbf884202c5.jpg?imwidth=700',
            descricao: 'Regata Masculina Malha Verão Branco',
          },
        ],
      },
      {
        id: 8,
        nome: 'Camiseta Masculina Manga Curta Summer Addict Rosa Salmão Pool by Riachuelo',
        url: 'camiseta-masculina-manga-curta-summer-addict-rosa-salm-o-pool-by-riachuelo',
        preco: 59.9,
        categoria: 2,
        descricao:
          'A Camiseta Masculina Manga Curta Summer Addict Rosa Salmão Pool by Riachuelo é produzida em fibra natural, sendo muito macia e confortável. Com modelagem regular, a peça possui estampa em lettering. As peças estampadas são sempre uma boa escolha na hora de compor um look mais despojado. Aposte! Combine com uma bermuda de sarja e tênis para um visual casual.',
        tamanhos_disponiveis: ['P', 'M', 'G'],
        quantidade_disponivel: 10,
        carrinho: 0,
        total: 59.9,
        imagens: [
          {
            url: 'https://static.riachuelo.com.br/RCHLO/14497638005/portrait/30ca8063d786f0de49bc66df1e81e167409eaa92.jpg?imwidth=700',
            url2: 'https://static.riachuelo.com.br/RCHLO/14497638005/portrait/b004ed6caa5a12d54236149311e3836b038ae7ba.jpg?imwidth=700',
            url3: 'https://static.riachuelo.com.br/RCHLO/14497638005/portrait/8e8307355a2575c8f931443171e739de72db26bf.jpg?imwidth=700',
            url4: 'https://static.riachuelo.com.br/RCHLO/14497638005/portrait/4bcd5549f462236ade50327941762dd5f593fe14.jpg?imwidth=700',
            descricao: 'Camiseta Masculina Manga Curta Summer Addict Rosa Salmão',
          },
        ],
      },
    ])
  }
  if(req.method === 'POST') {
    const cart = req.body
    res.status(200).json(cart)
  }
}
