interface ProductImage {
  url: string;
  descricao: string;
}

export interface CartType {
  id: number;
  nome: string;
  preco: number;
  quantidade_disponivel: number;
  carrinho: number;
  subTotal: number;
  imagens: ProductImage[];
}

export const dataCart:CartType[] = [
  {
    id: 1,
    nome: 'VESTIDO MIDI PLUS SIZE FEMININO ABERTO UMA MARIA LISO MARROM FILIPA BY RIACHUELO',
    preco: 259.9,
    quantidade_disponivel: 20,
    carrinho: 1,
    subTotal: 259.9,
    imagens: [
      {
        url: 'https://static.riachuelo.com.br/RCHLO/14595150003/portrait/47b6bc1baa2696ab9e414de591d2ccaf96f2d25b.jpg?imwidth=700',
        descricao: 'Vestido midi plus',
      },
    ],
  },
  {
    id: 2,
    nome: 'Camiseta Manga Curta Free Fire Branco',
    preco: 79.9,
    quantidade_disponivel: 15,
    carrinho: 1,
    subTotal: 79.9,
    imagens: [
      {
        url: 'https://static.riachuelo.com.br/RCHLO/14594536001/portrait/f0140498a034437cada79415e8a255ebe52b2f18.jpg?imwidth=700',
        descricao: 'Camiseta manga curta free fire branco',
      },
    ],
  },
  {
    id: 3,
    nome: 'Suéter Feminino Curto Tricot Liso Verde Pool Basics by Riachuelo',
    preco: 99.9,
    quantidade_disponivel: 13,
    carrinho: 1,
    subTotal: 99.9,
    imagens: [
      {
        url: 'https://static.riachuelo.com.br/RCHLO/14380226005/portrait/14ed05dd6b3dd0307140279eb7f538725d368e9a.jpg?imwidth=700',
        descricao: 'Suéter Feminino Curto Tricot Liso Verde',
      },
    ],
  },
]