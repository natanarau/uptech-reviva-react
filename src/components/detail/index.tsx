import Card from 'components/Card'
import { ButtonSetCart } from 'components/Button'
import { SizeProduct } from 'components/Sizes'
import { useContextDataProduct } from 'hooks/useContextProduct'
import Products from 'components/Products'
import * as S from './styles'
import { useParams } from 'react-router-dom'

export default function Detail() {
  const { dataProductValue } = useContextDataProduct()
  const { id } = useParams()
  const product = dataProductValue.find(item => item.id === Number(id))
  return (
    <>
      {product &&
        <S.BoxDetails>
          <S.BoxImgLg>
            <S.ImgLg src={product.imagens[0].url} alt={product.imagens[0].descricao}/>
          </S.BoxImgLg>
          <S.DataProducts>
            <S.BoxText>
            <S.Title>{product.nome}</S.Title>
            <S.Description>{product.descricao}</S.Description>
            </S.BoxText>
            <S.BoxImgMin>
              <S.ImgMin src={product.imagens[0].url} alt={product.imagens[0].descricao} />
              <S.ImgMin src={product.imagens[0].url2} alt={product.imagens[0].descricao} />
              <S.ImgMin src={product.imagens[0].url3} alt={product.imagens[0].descricao} />
              <S.ImgMin src={product.imagens[0].url4} alt={product.imagens[0].descricao} />
            </S.BoxImgMin>
            <S.GroupButton>
              <SizeProduct />
              <ButtonSetCart width={`30rem`} />
            </S.GroupButton>
          </S.DataProducts>
        </S.BoxDetails>
      }

      <Card />
      
      <S.Title>Quem comprou esse produto, também levou esses para casa!</S.Title>
      <S.BoxProduct>
        <Products category={2} />  
      </S.BoxProduct>
    </>
  )
}