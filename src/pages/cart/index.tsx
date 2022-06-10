import CartProduct from '../../components/cart'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Total from '../../components/cart/total'
import styles from './styles.module.scss'
import { dataCart } from './dataCart'


export default function Cart() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h2 className={styles.category}>Minha sacola</h2>
        <div className={styles.box_cart}>
          {dataCart.map(items => 
            <CartProduct key={items.id} nameProduct={items.nome} valueProduct={items.preco} cart={items.carrinho} idProduct={items.id} urlImg={items.imagens[0].url} altImg={items.imagens[0].descricao} />
          )}
          <Total />
        </div>
      </main>
      <Footer />
    </>
  )
}