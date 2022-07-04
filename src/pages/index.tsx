import type { NextPage } from 'next'
import { TextH2 } from 'components/Text'
import Products from 'components/Products'
import PageTemplate from 'templates/page'
import Card from 'components/Card'
import Blog from 'components/Blog'

const Home: NextPage = () => {
  return (
    <>
      <PageTemplate>
        <TextH2 size='2rem' textTransform='uppercase' margin='2rem 0' letterSpacing='.3rem'>Ultimos Lançamentos</TextH2>
        <Products category={1}/>   

        <Card />

        <TextH2 size='2rem' textTransform='uppercase' margin='2rem 0' letterSpacing='.3rem'>Coleção de Verão 2022</TextH2>
        <Products category={2}/>

        <Blog />
      </PageTemplate>
    </>
  )
}

export default Home
