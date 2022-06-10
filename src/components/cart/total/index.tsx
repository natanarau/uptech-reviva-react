import React from 'react'
import styles from './styles.module.scss'

type Props = {}

export default function Total({}: Props) {
  return (
    <>
      <div className={styles.box_cart__revis}>
        <div className={styles.box_cart__total}>
          <span className={styles.box_cart__t}>Total: R$ 519,80</span>
        </div>
        <div className={styles.box_cart__qt_bit}>
          <span className={styles.box_cart__desc}>1 x R$ 259,90 = R$ 259,90</span>
        </div>
        <div className={styles.box_cart__qt_bit}>
          <span className={styles.box_cart__desc}>1 x R$ 259,90 = R$ 259,90</span>
        </div>
        <button className={styles.box_cart__button}>Ir para o pagamento</button>
      </div>
    </>
  )
}