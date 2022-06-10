import React from 'react'
import styles from './styles.module.scss'

export interface CartType {
  key: number,
  idProduct: number,
  nameProduct: string,
  valueProduct: number,
  cart: number,
  urlImg: string,
  altImg: string,
}

export default function CartProduct(props:CartType) {
  return (
    <>
      <div className={styles.box_cart__product}>
        <img className={styles.box_cart__img} src={props.urlImg} alt={props.altImg}/>

        <div>
          <h3>Produto</h3>
          <span className={styles.box_cart__desc}>{props.nameProduct}</span>
        </div>

        <div className={styles.box_cart__size}>
          <h3>Tamanho escolhido</h3>
          <div className={styles.details__sizes}>
            <div className={styles.details__radios}>
              <label className={styles.details__label}>
                <input className={styles.details__input} type="radio" name="size" value="P"/>
                <span className={styles.details__span}>P</span>
              </label>
            </div>
            <div className={styles.details__radios}>
              <label className={styles.details__label}>
                <input className={styles.details__input} type="radio" name="size" value="M"/>
                <span className={styles.details__span}>M</span>
              </label>
            </div>
            <div className={styles.details__radios}>
              <label className={styles.details__label}>
                <input className={styles.details__input} type="radio" name="size" value="G"/>
                <span className={styles.details__span}>G</span>
              </label>
            </div>
          </div>
        </div>

        <div className={styles.box_cart__value}>
          <h3 className={styles.box_cart__title}>Valor</h3>
          <span className={styles.box_cart__desc}>R$ {props.valueProduct.toFixed(2).replace('.', ',')}</span>
        </div>

        <div className={styles.box_cart__qt}>
          <h3 className={styles.box_cart__title}>Quantidade</h3>
          <input className={styles.box_cart__input} type="number" name="qt" min="1" max="99"/>
        </div>

        <div className={styles.box_cart__sub_total}>
          <h3 className={styles.box_cart__title}>Subtotal</h3>
          <span className={styles.box_cart__desc}>R$ 259,90</span>
        </div>
      </div>
    </>
  )
}