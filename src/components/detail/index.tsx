import Card from 'components/card'
import { ButtonSetCart } from 'components/button'
import { SizeProduct } from 'components/sizes'
import { stateProducts } from 'pages/home/state'
import Products from 'components/products'
import { useRecoilValue } from 'recoil'
import { BoxDetails, BoxImgLg, BoxImgMin, ImgMin, BoxProduct, BoxText, DataProducts, ImgLg, Title, Description, GroupButton } from './styles'

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
  const allProduct = useRecoilValue<ProductTypes[]>(stateProducts)
  return (
    <>
      <BoxDetails>
        <BoxImgLg>
          <ImgLg src={props.urlImg} alt={props.altImg}/>
        </BoxImgLg>
        <DataProducts>
          <BoxText>
          <Title>{props.nameProduct}</Title>
          <Description>{props.descriptionProduct}</Description>
          </BoxText>
          <BoxImgMin>
            <ImgMin src={props.urlImg} alt={props.altImg} />
            <ImgMin src={props.urlImg2} alt={props.altImg} />
            <ImgMin src={props.urlImg3} alt={props.altImg} />
            <ImgMin src={props.urlImg4} alt={props.altImg} />
          </BoxImgMin>
          <GroupButton>
            <SizeProduct />
            <ButtonSetCart width={`30rem`} />
          </GroupButton>
        </DataProducts>
      </BoxDetails>

      <Card />
      
      <Title>Quem comprou esse produto, também levou esses para casa!</Title>
      <BoxProduct>
        {allProduct && allProduct.map((product) => 
          product.categoria == 2 && 
          <Products key={product.id} idProduct={product.id} nameProduct={product.nome} urlImg={product.imagens[0].url} altImg={product.imagens[0].descricao} valueProduct={product.preco.toFixed(2).replace('.', ',')} quantityProduct={product.quantidade_disponivel} />
        )}
      </BoxProduct>
    </>
  )
}