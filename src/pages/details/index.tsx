import PageTemplate from 'templates/page'
import { useParams } from 'react-router-dom'
import Detail from 'components/Detail'
import { useContextDataProduct } from 'hooks/useContextProduct'

interface ProductImage {
  url: string;
  url2: string;
  url3: string;
  url4: string;
  descricao: string;
}
export interface ProductTypes {
  id: any;
  nome: string;
  url: string;
  preco: number;
  categoria: number;
  descricao: string;
  tamanhos_disponiveis: any;
  quantidade_disponivel: number;
  carrinho: number;
  total: number;
  imagens: ProductImage[];
}

export const DetailsProducts = () => {
  const { id } = useParams()
  const { dataProductValue } = useContextDataProduct()
  const product = dataProductValue.find(item => item.id === Number(id))
  return (
    <PageTemplate>
      {product &&
        <Detail 
          id={id} 
          nameProduct={product.nome} 
          urlImg={product.imagens[0].url} 
          urlImg2={product.imagens[0].url2} 
          urlImg3={product.imagens[0].url3} 
          urlImg4={product.imagens[0].url4} 
          altImg={product.imagens[0].descricao} 
          valueProduct={product.preco} 
          descriptionProduct={product.descricao} 
        />
      }
    </PageTemplate>
  )
}