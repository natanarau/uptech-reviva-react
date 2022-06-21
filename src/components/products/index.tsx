import styles from './styles.module.scss';
import { setUpdateCart } from './state'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { SizeProduct } from 'components/sizes';
import { ButtonSetCart } from 'components/button';

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
  //console.log(`Atualizando estoque do produto ${props.idProduct} para ${newInventory.quantityProduct}`)
  //console.log(`Produto adicionado ao carrinho: ${props.idProduct} quantidade: ${setCart}`)

  return (
    <>
      <div className={styles.detail_product}>
        <div className={styles.product}>
          <Link to={`/detail/${props.idProduct}`}><img className={styles.product__img} src={props.urlImg} alt={props.altImg} /></Link>
          <SizeProduct />
        </div>
        <div className={styles.description_product}>
          <h3 className={styles.name_product}><Link to={`/detail/${props.idProduct}`} >{props.nameProduct}</Link></h3>
          <p className={styles.value_product}>R$ {props.valueProduct}</p>
          <ButtonSetCart onClick={() => updateCart(e => e+1)} width={`100%`} />
        </div>
      </div>
    </>
  )
}