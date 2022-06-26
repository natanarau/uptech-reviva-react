import CartProduct from 'components/Cart'
import Total from 'components/Cart/Total'
import { updateStateCart } from './state'
import { useRecoilValue } from 'recoil'
import PageTemplate from 'templates/page'
import { TextH2 } from 'components/Text'

export const Cart = () => {
  const allProductsCart = useRecoilValue(updateStateCart)
  return (
    <>
      <PageTemplate>
        <TextH2 size='2rem' margin='2rem 0'>Minha Sacola</TextH2>
          {allProductsCart.map(items => 
            <CartProduct 
              key={items.id} 
              nome={items.nome} 
              preco={items.preco} 
              carrinho={items.carrinho} 
              id={items.id} 
              urlImg={items.imagens[0].url} 
              altImg={items.imagens[0].descricao} 
              quantidade_disponivel={items.quantidade_disponivel} 
            />
          )}
          <Total />
      </PageTemplate>
        
    </>
  )
}