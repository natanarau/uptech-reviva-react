import styled, { css } from "styled-components";

interface TextAttributes {
  width?: string;
  ht?: string;
  fontWeight?: string;
  margin?: string;
  textTransform?: string;
  transition?: string;
  size: string;
  letterSpacing?: string
}

export const TextH2 = styled.h2<TextAttributes> `
  ${({size, margin, textTransform, letterSpacing}) => css`
    font-size: ${size};
    margin: ${margin};
    text-transform: ${textTransform};
    letter-spacing: ${letterSpacing};
  `}
`
export const TextH3 = styled.h3<TextAttributes> `
  ${({size, margin, ht, textTransform, transition}) => css`
    font-size: ${size};
    margin: ${margin};
    height: ${ht};
    text-transform: ${textTransform};
    transition: ${transition};
  `}
  &:hover {
    opacity: 70%;
  }
`
export const TextP = styled.p<TextAttributes> `
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