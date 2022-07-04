import * as S from './styles'
import { TextP } from 'components/Text'
import Logo from 'components/Logo'

export default function Card() {
  return (
    <>
      <S.BoxCard>
        <S.DescriptionCard>
          <TextP size='2rem'>Fique por dentro de tudo que há de novidade no mundo da moda!</TextP>
          <TextP size='2.4rem' letterSpacing='0.86rem'>Baixe já nosso manual de moda!</TextP>
        </S.DescriptionCard>
        <Logo justifySelf='end'/>
      </S.BoxCard>
    </>
  )
}