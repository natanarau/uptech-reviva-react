import CartProduct from 'components/cart'
import Footer from 'components/footer'
import Header from 'components/header'
import Total from 'components/cart/total'
import styles from './styles.module.scss'
import { updateStateCart } from './state'
import { useRecoilValue } from 'recoil'
import PageTemplate from 'templates/page'

export const Cart = () => {
  const allProductsCart = useRecoilValue(updateStateCart)
  return (
    <>
      <PageTemplate>
        <h2 className={styles.category}>Minha sacola</h2>
        <div className={styles.box_cart}>
          {allProductsCart.map(items => 
            <CartProduct key={items.id} nome={items.nome} preco={items.preco} carrinho={items.carrinho} id={items.id} urlImg={items.imagens[0].url} altImg={items.imagens[0].descricao} quantidade_disponivel={items.quantidade_disponivel} />
          )}
          <Total />
        </div>
      </PageTemplate>
        
    </>
  )
}