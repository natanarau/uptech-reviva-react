import type { ProductTypes } from './data'
import { stateProducts } from './state'
import styles from './styles.module.scss'
import Products from 'components/products'
import Card from 'components/card'
import Blog from 'components/blog'
import { useRecoilValue } from 'recoil'
import PageTemplate from 'templates/page'

export const Home = () => {
  const allProduct = useRecoilValue<ProductTypes[]>(stateProducts)
  return (
    <>
      <PageTemplate>
        <h2 className={styles.category}>Ultimos Lançamentos</h2>
        <div className={styles.group_products}>
          
          {allProduct && allProduct.map((product) => 
          product.categoria == 1 && 
            <Products key={product.id} idProduct={product.id} nameProduct={product.nome} urlImg={product.imagens[0].url} altImg={product.imagens[0].descricao} valueProduct={product.preco.toFixed(2).replace('.', ',')} quantityProduct={product.quantidade_disponivel} />       
          )}

        </div>
        <Card />
        <h2 className={styles.category}>Coleção de Verão 2022</h2>
        <div className={styles.group_products}>
          
          {allProduct && allProduct.map((product) => 
          product.categoria == 2 && 
            <Products key={product.id} idProduct={product.id} nameProduct={product.nome} urlImg={product.imagens[0].url} altImg={product.imagens[0].descricao} valueProduct={product.preco.toFixed(2).replace('.', ',')} quantityProduct={product.quantidade_disponivel} />
          )}

        </div>
        <Blog />
      </PageTemplate>
    </>
  )
}
