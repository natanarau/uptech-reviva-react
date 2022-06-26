import styled from "styled-components";

interface AttributesLogo {
  color?: string;
  size?: string;
  fontFamily?: string; 
  justifySelf?: string;
  margin?: string;
}

export const BoxLogo = styled.div<AttributesLogo> `
  display: grid;
  justify-self: ${props => props.justifySelf};
  margin: ${props => props.margin}
`
export const TitleLogo = styled.h1<AttributesLogo> `
  text-transform: uppercase;
  font-weight: 300;
  color: ${props => props.color};
  @media only screen and (max-width: 700px) {
    font-size: 2.5rem;
  }
`
export const By = styled.span<AttributesLogo> `
  font-size: 1.2rem;
  justify-self: end;
`