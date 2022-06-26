import Card from 'components/Card'
import { ButtonSetCart } from 'components/Button'
import { SizeProduct } from 'components/Sizes'
import { useContextDataProduct } from 'hooks/useContextProduct'
import Products from 'components/Products'
import * as S from './styles'

interface ProductImage {
  url: string;
  descricao: string;
}
export interface ProductTypes {
  id: any;
  nome: string;
  url: string;
  preco: number;
  categoria: number;
  descricao: string;
  tamanhos_disponiveis: any;
  quantidade_disponivel: number;
  carrinho: number;
  total: number;
  imagens: ProductImage[];
}

interface DataProduct { 
  id: any
  nameProduct: string
  urlImg: string
  urlImg2: string;
  urlImg3: string;
  urlImg4: string;
  altImg: string,
  valueProduct: number
  descriptionProduct: string
}
export default function Detail(props: DataProduct) {
  const { dataProductValue } = useContextDataProduct()
  const categoryProduct1 = dataProductValue.filter(item => item.categoria === 1)
  return (
    <>
      <S.BoxDetails>
        <S.BoxImgLg>
          <S.ImgLg src={props.urlImg} alt={props.altImg}/>
        </S.BoxImgLg>
        <S.DataProducts>
          <S.BoxText>
          <S.Title>{props.nameProduct}</S.Title>
          <S.Description>{props.descriptionProduct}</S.Description>
          </S.BoxText>
          <S.BoxImgMin>
            <S.ImgMin src={props.urlImg} alt={props.altImg} />
            <S.ImgMin src={props.urlImg2} alt={props.altImg} />
            <S.ImgMin src={props.urlImg3} alt={props.altImg} />
            <S.ImgMin src={props.urlImg4} alt={props.altImg} />
          </S.BoxImgMin>
          <S.GroupButton>
            <SizeProduct />
            <ButtonSetCart width={`30rem`} />
          </S.GroupButton>
        </S.DataProducts>
      </S.BoxDetails>

      <Card />
      
      <S.Title>Quem comprou esse produto, também levou esses para casa!</S.Title>
      <S.BoxProduct>
        <Products category={2} />  
      </S.BoxProduct>
    </>
  )
}