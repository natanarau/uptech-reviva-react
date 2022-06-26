import * as S from './styles'

interface AttributesLogo {
  color?: string;
  size?: string;
  fontFamily?: string; 
  justifySelf?: string;
  margin?: string;
}

export default function Logo(props: AttributesLogo) {
  return (
    <>
      <S.BoxLogo justifySelf={props.justifySelf} margin={props.margin}>
        <S.TitleLogo color={props.color} size={props.size} fontFamily={props.fontFamily}>Reviva Fashion</S.TitleLogo>
        <S.By>by RCHLO</S.By>
      </S.BoxLogo>
    </>
  )
}