import { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { updateQuantityProductCart } from './state'
import styles from './styles.module.scss'

export interface CartTypeAdd {
  id: number;
  nome: string;
  preco: number;
  quantidade_disponivel: number;
  carrinho: number;
  urlImg: string,
  altImg: string
}

export default function CartProduct(props:CartTypeAdd) {

  const updateQuantity = useSetRecoilState(updateQuantityProductCart)
  const allProductCart = useRecoilValue(updateQuantityProductCart)
  const [value, setValue] = useState<any>(1)
  const subTotal = value * props.preco
  const changeCart = (e:React.ChangeEvent<HTMLInputElement>) => {
    const newArray = allProductCart.map(item => {
      if(String(item.id) === e.target.id){
       return {...item, carrinho: Number(e.target.value)}
      }
     return item
    })
    setValue(e.target.value)
    updateQuantity(newArray)
  }

  return (
    <>
      <div className={styles.box_cart__product}>
        <img className={styles.box_cart__img} src={props.urlImg} alt={props.altImg}/>

        <div>
          <h3>Produto</h3>
          <span className={styles.box_cart__desc}>{props.nome}</span>
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
          <span className={styles.box_cart__desc}>R$ {props.preco.toFixed(2).replace('.', ',')}</span>
        </div>

        <div className={styles.box_cart__qt}>
          <h3 className={styles.box_cart__title}>Quantidade</h3>

          <input className={styles.box_cart__input} id={`${props.id}`} onChange={changeCart} value={value} type="number" name={String(props.id)} min="1" max={props.quantidade_disponivel}/>

        </div>

        <div className={styles.box_cart__sub_total}>
          <h3 className={styles.box_cart__title}>Subtotal</h3>
          <span className={styles.box_cart__desc}>R$ {subTotal.toFixed(2).replace('.', ',')}</span>
        </div>
      </div>
    </>
  )
}