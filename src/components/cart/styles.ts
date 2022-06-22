import styled from "styled-components";

export const boxCart = styled.div `
  display: grid;
  grid-template-columns: 2fr 2fr repeat(4, 1fr) ;
  grid-gap: 2rem;
  margin-bottom: 2rem;
  @media only screen and (max-width: 1115px) {
    justify-self: center;
  }
  @media only screen and (max-width: 870px) {
    grid-template-columns: 1fr;
  }
`
export const ImgProduct = styled.img `
  width: 100%;
  @media only screen and (max-width: 1115px) {
    max-width: 50rem;
    margin: auto;
  }
`
export const Box = styled.div `
  display: block;
` 
export const InputQuantity = styled.input `
  width: 5rem;
  height: 3rem;
  font-size: 2rem;
  text-align: center;
`