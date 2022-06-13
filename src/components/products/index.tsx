import styles from './styles.module.scss';
import { setUpdateCart } from './state'
import { useRecoilValue, useSetRecoilState } from 'recoil';

interface Products  {
  nameProduct: string,
  idProduct: number,
  urlImg: string,
  altImg: string,
  valueProduct: string,
  quantityProduct: number
}

export default function Products(props: Products) {
  const setCart = useRecoilValue(setUpdateCart)
  const updateCart = useSetRecoilState(setUpdateCart)
  const newCart = {idProduct: props.idProduct, quantitySet: setCart, unitValueProduct: props.valueProduct}
  const newInventory = {...props, quantityProduct: props.quantityProduct - setCart}
  console.log(`Atualizando estoque do produto ${props.idProduct} para ${newInventory.quantityProduct}`)
  console.log(`Produto adicionado ao carrinho: ${props.idProduct} quantidade: ${setCart}`)
  return (
    <>
      <div className={styles.detail_product}>
        <div className={styles.product}>
          <img className={styles.product__img} src={props.urlImg} alt={props.altImg} />
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
        <div className={styles.description_product}>
            <h3 className={styles.name_product}><a href="detalhes.html">{props.nameProduct}</a></h3>
            <p className={styles.value_product}>R$ {props.valueProduct}</p>
            <button className={styles.add} onClick={() => updateCart(e => e+1)}>
              <div className={styles.add__content}>
                <div className={styles.add__cart}>
                  POR NO CARRINHO
                  <img className={styles.add__img} src={process.env.PUBLIC_URL + 'assets/img/icons/shopping_cart_2.svg'} alt="Adicionar ao Carrinho"/>
                </div>
                <div className={styles.add__ok}>
                  <img className={styles.add__ok_img} src={process.env.PUBLIC_URL + 'assets/img/icons/check-solid.svg'} alt="Adicionado ao Carrinho"/>
                </div>
              </div>
            </button>
        </div>
      </div>
    </>
  )
}