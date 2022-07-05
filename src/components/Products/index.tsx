import React from 'react';
import * as S from './styles';
import Link from 'next/link';
import { SizeProduct } from 'components/Sizes';
import { ButtonSetCart } from 'components/Button';
import { TextH3, TextP } from 'components/Text';
import useFetch from 'hooks/useFetch'
import useAddCart from 'hooks/useAddCart';
import Alert from 'components/Alert';
import Loading from 'components/Loading';
import type { ProductTypes } from 'types';
import { useUpdateEffect } from 'react-use';

export default function Products(props: {category:number})  {
  const { data, request, error, loading } = useFetch();
  const { requestCart } = useAddCart();
  const [cart, setCart] = React.useState<ProductTypes[]>([]);

  const Imagem = React.forwardRef((props:any, ref) => <S.ImgProduct {...props} />)
  const Text = React.forwardRef((props:any, ref) => <TextH3 {...props} />)

  const filterProduct = data && data.filter(item => item.categoria === props.category);

  const addCart = (id: number) => {
    const getProductClicked = data && data.find(e => e.id === id);
    const getProductState = cart && cart.filter(e => e.id !== id );

    if(getProductClicked && getProductState) {
      const newCart = {...getProductClicked, carrinho: 1 + getProductClicked.carrinho++, quantidade_disponivel: getProductClicked.quantidade_disponivel - getProductClicked.carrinho}
      setCart([...getProductState, newCart])
    }
  }

  useUpdateEffect(() => {
    requestCart(`http://localhost:3000/api/data`, {
      method: 'POST',
      body: JSON.stringify(cart),
      headers: {
        'content-type': 'application/json',
      },
    })
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  React.useEffect(() => {
    request(`http://localhost:3000/api/data`)
  }, [])

  return (
    <>
      {error && <Alert bg='#f8d7da' borderColor='#f5c6cb' color='#721c24' positionAlert='relative' msn={error} />}
      {loading && <Loading/>}
      {!loading && filterProduct && 
        <S.BoxAllProducts>
          {filterProduct.map(item => 
          <S.BoxProducts key={item.id}>
            <S.BoxImg>
              <Link href={`/detail/${item.id}`}><Imagem src={item.imagens[0].url} alt={item.imagens[0].descricao} /></Link>
              <SizeProduct />
            </S.BoxImg>
            <S.Box>
              <Link href={`/detail/${item.id}`}>
                <Text cr='pointer' size='1.8rem' margin='0.5rem 0' ht='10rem' textTransform='uppercase' transition='0.3s'>{item.nome}</Text>
              </Link>
              <TextP color='#D0403A' size='1.8rem' margin='0.5rem 0' fontWeight='600'>{`R$ ${item.preco}`}</TextP>
              <ButtonSetCart onClick={() => addCart(item.id)} width='100%' />
            </S.Box>
          </S.BoxProducts>
          )}
        </S.BoxAllProducts>
      }
    </>
  )
}