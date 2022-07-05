import React from 'react'
import { useRouter } from 'next/router'
import useFetch from 'hooks/useFetch'
import Card from 'components/Card'
import { ButtonSetCart } from 'components/Button'
import { SizeProduct } from 'components/Sizes'
import Products from 'components/Products'
import * as S from './styles'
import Loading from 'components/Loading'
import Alert from 'components/Alert'

export default function Detail() {
  const { id } = useRouter().query;
  const {data, error, request, loading} = useFetch();
  const product = data && data.find(item => item.id === Number(id))

  React.useEffect(() => {
    request(`http://localhost:3000/api/data`)
  }, [])

  return (
    <>
      {error && <Alert bg='#f8d7da' borderColor='#f5c6cb' color='#721c24' positionAlert='relative' msn={error} />}
      {loading ? <Loading/> : product &&
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
      <Products category={2} />  
      
    </>
  )
}