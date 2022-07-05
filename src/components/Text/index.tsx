import * as S from './styles'

interface TextType {
  children: string;
  width?: string;
  ht?: string;
  fontWeight?: string;
  margin?: string;
  textTransform?: string;
  transition?: string;
  size: string;
  letterSpacing?: string
  color?: string;
  cr?: string;
}

export const TextH2 = (props:TextType) => {
  return (
    <S.TextH2 {...props}>{props.children}</S.TextH2>
  )
}
export const TextP = (props:TextType) => {
  return (
    <S.TextP {...props}>{props.children}</S.TextP>
  )
}
export const TextH3 = (props:TextType) => {
  return(
    <S.TextH3 {...props}>{props.children}</S.TextH3>
  )
}