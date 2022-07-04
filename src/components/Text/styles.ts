import styled, { css } from "styled-components";

interface TextProps {
  width?: string;
  ht?: string;
  fontWeight?: string;
  margin?: string;
  textTransform?: string;
  transition?: string;
  size: string;
  letterSpacing?: string;
  cr?: string
}

export const TextH2 = styled.h2<TextProps> `
  ${({size, margin, textTransform, letterSpacing}) => css`
    font-size: ${size};
    margin: ${margin};
    text-transform: ${textTransform};
    letter-spacing: ${letterSpacing};
  `}
`
export const TextH3 = styled.h3<TextProps> `
  ${({size, margin, ht, textTransform, transition, cr}) => css`
    font-size: ${size};
    margin: ${margin};
    height: ${ht};
    text-transform: ${textTransform};
    transition: ${transition};
    cursor: ${cr};
  `}
  &:hover {
    opacity: 70%;
  }
`
export const TextP = styled.p<TextProps> `
  ${({size, letterSpacing, margin, textTransform, transition, fontWeight, color}) => css`
    font-size: ${size};
    letter-spacing: ${letterSpacing};
    margin: ${margin};
    text-transform: ${textTransform};
    transition: ${transition};
    font-weight: ${fontWeight};
    color: ${color};
  `}
  @media only screen and (max-width: 700px) {
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 400px) {
    font-size: 1.2rem;
  }
`