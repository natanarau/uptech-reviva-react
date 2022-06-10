import React from 'react'
import { data } from './data'
import type { ProductTypes } from './data'
import styles from './styles.module.scss'
import Header from '../../components/header'
import Products from '../../components/products'
import Footer from '../../components/footer'
import Searh from '../../components/search'
import Card from '../../components/card'
import Blog from '../../components/blog'

export default function Home() {
  const localProducts = localStorage.getItem('products') 
  const [base, setBase] = React.useState<ProductTypes[]>(localProducts && JSON.parse(localProducts))
  React.useEffect(() => {
    if(!localProducts) {
      localStorage.setItem('products', JSON.stringify(data)) 
      setBase(data)
    } 
  }, [])
  
  return (
    <>
    <Header />
    <main className={styles.container}>
      <Searh />    
      <h2 className={styles.category}>Ultimos Lançamentos</h2>
      <div className={styles.group_products}>

        {base && base.map((product) => 
          product.categoria == 1 && 
          <Products key={product.id} idProduct={product.id} nameProduct={product.nome} urlImg={product.imagens[0].url} altImg={product.imagens[0].descricao} valueProduct={product.preco.toFixed(2).replace('.', ',')}  />
        )}

      </div>
      <Card />
      <h2 className={styles.category}>Coleção de Verão 2022</h2>
      <div className={styles.group_products}>

        {base && base.map((product) => 
          product.categoria == 2 && 
          <Products key={product.id} idProduct={product.id} nameProduct={product.nome} urlImg={product.imagens[0].url} altImg={product.imagens[0].descricao} valueProduct={product.preco.toFixed(2).replace('.', ',')}  />
        )}

      </div>
      <Blog />
    </main>
    <Footer />
    </>
  )
}
