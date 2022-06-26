import CartProduct from 'components/Cart'
import Total from 'components/Cart/Total'
import PageTemplate from 'templates/page'
import { TextH2 } from 'components/Text'
import { useContextDataCart } from 'hooks/useContextCart'

export const Cart = () => {
  const {dataCartState} = useContextDataCart()
  return (
    <>
      <PageTemplate>
        <TextH2 size='2rem' margin='2rem 0'>Minha Sacola</TextH2>
          {dataCartState.map(items => 
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