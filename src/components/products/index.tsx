import * as S from './styles';
import { Link } from 'react-router-dom';
import { useContextDataProduct } from 'hooks/useContextProduct';
import { SizeProduct } from 'components/Sizes';
import { ButtonSetCart } from 'components/Button';
import { TextH3, TextP } from 'components/Text';

export default function Products(props: {category:number})  {
  const { dataProductValue } = useContextDataProduct();
  const filterProduct = dataProductValue.filter(item => item.categoria === props.category);
  return (
    <>
      {filterProduct && filterProduct.map(item => 
        <S.BoxProducts key={item.id}>
          <S.BoxImg>
            <Link to={`/detail/${item.id}`}><S.ImgProduct src={item.imagens[0].url} alt={item.imagens[0].descricao} /></Link>
            <SizeProduct />
          </S.BoxImg>
          <S.Box>
            <Link to={`/detail/${item.id}`}>
              <TextH3 size='1.8rem' margin='0.5rem 0' ht='10rem' textTransform='uppercase' transition='0.3s'>{item.nome}</TextH3>
            </Link>
            <TextP color='#D0403A' size='1.8rem' margin='0.5rem 0' fontWeight='600'>{`R$ ${item.preco}`}</TextP>
            <ButtonSetCart width={`100%`} />
          </S.Box>
        </S.BoxProducts>
      )}
    </>
  )
}