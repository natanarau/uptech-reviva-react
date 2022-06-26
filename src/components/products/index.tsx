import * as S from './styles'
import { Link } from 'react-router-dom';
import { SizeProduct } from 'components/Sizes';
import { ButtonSetCart } from 'components/Button';
import { TextH3, TextP } from 'components/Text';

interface Products  {
  nameProduct: string,
  idProduct: number,
  urlImg: string,
  altImg: string,
  valueProduct: string,
  quantityProduct: number
}

export default function Products(props: Products) {
  return (
    <>
      <S.BoxProducts>
        <S.BoxImg>
          <Link to={`/detail/${props.idProduct}`}><S.ImgProduct src={props.urlImg} alt={props.altImg} /></Link>
          <SizeProduct />
        </S.BoxImg>
        <S.Box>
          <Link to={`/detail/${props.idProduct}`}>
            <TextH3 size='1.8rem' margin='0.5rem 0' ht='10rem' textTransform='uppercase' transition='0.3s'>{props.nameProduct}</TextH3>
          </Link>
          <TextP color='#D0403A' size='1.8rem' margin='0.5rem 0' fontWeight='600'>{`R$ ${props.valueProduct}`}</TextP>
          <ButtonSetCart width={`100%`} />
        </S.Box>
      </S.BoxProducts>
    </>
  )
}