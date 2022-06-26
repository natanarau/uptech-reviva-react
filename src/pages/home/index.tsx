import Products from 'components/Products'
import Card from 'components/Card'
import Blog from 'components/Blog'
import PageTemplate from 'templates/page'
import { TextH2 } from 'components/Text'
import * as S from './styles'

export const Home = () => {
  return (
    <>
      <PageTemplate>
        <TextH2 size='2rem' textTransform='uppercase' margin='2rem 0' letterSpacing='.3rem'>Ultimos Lançamentos</TextH2>
        <S.BoxAllProducts>
          <Products category={1}/>   
        </S.BoxAllProducts>

        <Card />

        <TextH2 size='2rem' textTransform='uppercase' margin='2rem 0' letterSpacing='.3rem'>Coleção de Verão 2022</TextH2>
        <S.BoxAllProducts>
          <Products category={2}/>
        </S.BoxAllProducts>

        <Blog />
      </PageTemplate>
    </>
  )
}
