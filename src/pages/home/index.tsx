import { useContextDataProduct } from 'hooks/useContextProduct'
import Products from 'components/Products'
import Card from 'components/Card'
import Blog from 'components/Blog'
import PageTemplate from 'templates/page'
import { TextH2 } from 'components/Text'
import * as S from './styles'

export const Home = () => {
  const { dataProductValue } = useContextDataProduct()
  return (
    <>
      <PageTemplate>
        <TextH2 size='2rem' textTransform='uppercase' margin='2rem 0' letterSpacing='.3rem'>Ultimos Lançamentos</TextH2>
        <S.BoxAllProducts>
          {dataProductValue && dataProductValue.map((product) => 
          product.categoria === 1 && 
            <Products 
              key={product.id} 
              idProduct={product.id} 
              nameProduct={product.nome} 
              urlImg={product.imagens[0].url} 
              altImg={product.imagens[0].descricao} 
              valueProduct={product.preco.toFixed(2).replace('.', ',')} 
              quantityProduct={product.quantidade_disponivel} 
            />       
          )}
        </S.BoxAllProducts>

        <Card />

        <TextH2 size='2rem' textTransform='uppercase' margin='2rem 0' letterSpacing='.3rem'>Coleção de Verão 2022</TextH2>
        <S.BoxAllProducts>
          {dataProductValue && dataProductValue.map((product) => 
          product.categoria === 2 && 
            <Products 
              key={product.id} 
              idProduct={product.id} 
              nameProduct={product.nome} 
              urlImg={product.imagens[0].url} 
              altImg={product.imagens[0].descricao} 
              valueProduct={product.preco.toFixed(2).replace('.', ',')} 
              quantityProduct={product.quantidade_disponivel} 
            />
          )}
        </S.BoxAllProducts>

        <Blog />
      </PageTemplate>
    </>
  )
}
