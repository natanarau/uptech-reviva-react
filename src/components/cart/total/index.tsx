import { useRecoilValue } from 'recoil'
import { updateQuantityProductCart } from '../state'
import * as S from './styles'
import { TextH2 } from 'components/Text'

export default function Total() {
  const qtUpdate = useRecoilValue(updateQuantityProductCart)
  const total = qtUpdate.map(item => item.carrinho * item.preco).reduce((acc, curr) => acc + curr, 0)
  return (
    <>
      <S.BoxTotal>
        <TextH2 size='3rem'>{`Total: R$ ${total.toFixed(2).replace('.', ',')}`}</TextH2>
        <S.ButtonPay>Ir para pagamento</S.ButtonPay>
      </S.BoxTotal>
    </>
  )
}