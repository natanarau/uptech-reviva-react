import CartProduct from 'components/Cart'
import Total from 'components/Cart/Total'
import PageTemplate from 'templates/page'
import { TextH2 } from 'components/Text'

export default function Cart() {
  return (
    <>
      <PageTemplate>
        <TextH2 size='2rem' margin='2rem 0'>Minha Sacola</TextH2>
        <CartProduct />
        <Total />
      </PageTemplate>
    </>
  )
}