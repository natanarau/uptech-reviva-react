import { useState } from 'react'
import * as S from './styles'
import { SizeProduct } from 'components/Sizes'
import { TextH3, TextP } from 'components/Text'
import { useContextDataCart } from 'hooks/useContextCart'

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
  const { dataCartValue, setDataCartValue } = useContextDataCart()
  const [value, setValue] = useState<any>(1)
  const subTotal = value * props.preco
  const changeCart = (e:React.ChangeEvent<HTMLInputElement>) => {
    const newArray = dataCartValue.map(item => {
      if(String(item.id) === e.target.id){
       return {...item, carrinho: Number(e.target.value)}
      }
     return item
    })
    setValue(e.target.value)
    setDataCartValue(newArray)
  }

  return (
    <>
      <S.boxCart>
        <S.ImgProduct src={props.urlImg} alt={props.altImg}/>

        <S.Box>
          <TextH3 size='1.17rem'>Produto</TextH3>
          <TextP size='1.5rem'>{props.nome}</TextP>
        </S.Box>

        <S.Box>
          <TextH3 size='1.17rem'>Tamanho escolhido</TextH3>
          <SizeProduct />
        </S.Box>

        <S.Box>
          <TextH3 size='1.17rem'>Valor</TextH3>
          <TextP size='1.5rem'>{`R$ ${props.preco.toFixed(2).replace('.', ',')}`}</TextP>
        </S.Box>

        <S.Box>
          <TextH3 size='1.17rem'>Quantidade</TextH3>
          <S.InputQuantity id={`${props.id}`} onChange={changeCart} value={value} type="number" name={String(props.id)} min="1" max={props.quantidade_disponivel}/>
        </S.Box>

        <S.Box>
          <TextH3 size='1.17rem'>Subtotal</TextH3>
          <TextP size='1.5rem'>{`R$ ${subTotal.toFixed(2).replace('.', ',')}`}</TextP>
        </S.Box>
      </S.boxCart>
    </>
  )
}