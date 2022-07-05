import styled from "styled-components";

export const BoxProducts = styled.div `
  display: block;
`
export const BoxImg = styled.div `
  display: grid;
  align-items: end;
  cursor: pointer;
`
export const ImgProduct = styled.img `
  justify-self: center;
  width: 100%;
  margin-bottom: 1rem;
`
export const Box = styled.div `
  display: block;
`
export const BoxAllProducts = styled.div `
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 5rem;
  @media only screen and (max-width: 1190px) {
    grid-template-columns: repeat(3, 1fr);
  };
  @media only screen and (max-width: 910px) {
    grid-template-columns: repeat(2, 1fr);
  };
  @media only screen and (max-width: 630px) {
    grid-template-columns: 1fr;
  }
`
