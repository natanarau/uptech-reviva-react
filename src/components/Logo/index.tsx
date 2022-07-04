import * as S from './styles'

interface logoProps {
  color?: string;
  size?: string;
  fontFamily?: string; 
  justifySelf?: string;
  margin?: string;
}

export default function Logo(props: logoProps) {
  return (
    <>
      <S.BoxLogo justifySelf={props.justifySelf} margin={props.margin}>
        <S.TitleLogo color={props.color} size={props.size} fontFamily={props.fontFamily}>Reviva Fashion</S.TitleLogo>
        <S.By>by RCHLO</S.By>
      </S.BoxLogo>
    </>
  )
}