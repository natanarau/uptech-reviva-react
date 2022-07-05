import * as S from './styles'
import { TextH2 } from 'components/Text'
import { useContextDataCart } from 'hooks/useContextCart'

export default function Total() {
  const { dataCartValue } = useContextDataCart() 
  const total = dataCartValue && dataCartValue.map(item => item.carrinho * item.preco).reduce((acc, curr) => acc + curr, 0)
  return (
    <>
      <S.BoxTotal>
        <TextH2 size='3rem'>{`Total: R$ ${total && total.toFixed(2).replace('.', ',')}`}</TextH2>
        <S.ButtonPay>Ir para pagamento</S.ButtonPay>
      </S.BoxTotal>
    </>
  )
}