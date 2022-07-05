import React from 'react'
import * as S from './styles'
import { SizeProduct } from 'components/Sizes'
import { TextH3, TextP } from 'components/Text'
import { useContextDataCart } from 'hooks/useContextCart'

export default function CartProduct() {
  const { dataCartValue, setDataCartValue } = useContextDataCart()
  const changeCart = (e:React.ChangeEvent<HTMLInputElement>) => {
    const newArray = dataCartValue && dataCartValue.map(item => {
      if(String(item.id) === e.target.id){
       return {...item, carrinho: Number(e.target.value), total: Number(e.target.value) * item.preco}
      }
    return item
    })
    setDataCartValue(newArray)
  }
  
  return (
    <>
      {dataCartValue && dataCartValue.map(item => 
        <S.boxCart key={item.id}>
          <S.ImgProduct src={item.imagens[0].url} alt={item.imagens[0].descricao}/>

          <S.Box>
            <TextH3 size='1.17rem'>Produto</TextH3>
            <TextP size='1.5rem'>{item.nome}</TextP>
          </S.Box>

          <S.Box>
            <TextH3 size='1.17rem'>Tamanho escolhido</TextH3>
            <SizeProduct />
          </S.Box>

          <S.Box>
            <TextH3 size='1.17rem'>Valor</TextH3>
            <TextP size='1.5rem'>{`R$ ${item.preco.toFixed(2).replace('.', ',')}`}</TextP>
          </S.Box>

          <S.Box>
            <TextH3 size='1.17rem'>Quantidade</TextH3>
            <S.InputQuantity id={`${item.id}`} onChange={changeCart} value={item.carrinho} role={`${item.id}`} type="number" name={String(item.id)} min="1" max={item.quantidade_disponivel}/>
          </S.Box>

          <S.Box>
            <TextH3 size='1.17rem'>Subtotal</TextH3>
            <TextP size='1.5rem'>{`R$ ${item.total.toFixed(2).replace('.', ',')}`}</TextP>
          </S.Box>
        </S.boxCart>
      )}
    </>
  )
}