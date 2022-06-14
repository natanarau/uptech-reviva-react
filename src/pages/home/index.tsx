import type { ProductTypes } from './data'
import { stateProducts } from './state'
import styles from './styles.module.scss'
import Header from 'components/header'
import Products from 'components/products'
import Footer from 'components/footer'
import Searh from 'components/search'
import Card from 'components/card'
import Blog from 'components/blog'
import { RecoilRoot, useRecoilValue } from 'recoil'
import PageTemplate from 'templates/page'

export default function Home() {
  const allProduct = useRecoilValue<ProductTypes[]>(stateProducts)
  return (
    <>
      <PageTemplate>
        <h2 className={styles.category}>Ultimos Lançamentos</h2>
        <div className={styles.group_products}>
          
          {allProduct && allProduct.map((product) => 
          product.categoria == 1 && 
          <RecoilRoot key={product.id}>
            <Products  idProduct={product.id} nameProduct={product.nome} urlImg={product.imagens[0].url} altImg={product.imagens[0].descricao} valueProduct={product.preco.toFixed(2).replace('.', ',')} quantityProduct={product.quantidade_disponivel} />       
          </RecoilRoot>
          )}

        </div>
        <Card />
        <h2 className={styles.category}>Coleção de Verão 2022</h2>
        <div className={styles.group_products}>
          
          {allProduct && allProduct.map((product) => 
          product.categoria == 2 && 
          <RecoilRoot key={product.id}>
            <Products  idProduct={product.id} nameProduct={product.nome} urlImg={product.imagens[0].url} altImg={product.imagens[0].descricao} valueProduct={product.preco.toFixed(2).replace('.', ',')} quantityProduct={product.quantidade_disponivel} />
          </RecoilRoot>
          )}

        </div>
        <Blog />
      </PageTemplate>
    </>
  )
}
