import styles from './styles.module.scss'
import { useRecoilValue } from 'recoil'
import { updateQuantityProductCart } from '../state'

export default function Total() {
  const qtUpdate = useRecoilValue(updateQuantityProductCart)
  const total = qtUpdate.map(item => item.carrinho * item.preco).reduce((acc, curr) => acc + curr, 0)
  return (
    <>
      <div className={styles.box_cart__revis}>
        <div className={styles.box_cart__total}>
          <span className={styles.box_cart__t}>Total: R$ {total.toFixed(2).replace('.', ',')}</span>
        </div>
        <button className={styles.box_cart__button}>Ir para o pagamento</button>
      </div>
    </>
  )
}