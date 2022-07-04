import styled from "styled-components";

export const BoxDetails = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5rem;
  margin-top: 5rem;
  @media only screen and (max-width: 870px) {
    grid-template-columns: 1fr;
  }
`
export const Title = styled.h2 `
  margin: 1.5rem 0;
  letter-spacing: 1.7px;
  text-transform: uppercase;
  color: #261E1E;
`
export const Description = styled.p `
  font-size: 1.5rem;
`
export const BoxImgLg = styled.div `
  display: block;
  margin: auto;
  width: 100%;
`
export const ImgLg = styled.img `
  display: block;
  margin: auto;
  width: 100%;
`
export const BoxImgMin = styled.div `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`
export const ImgMin = styled.img `
  width: 100%;
`
export const DataProducts = styled.div `
  display: grid;
`
export const BoxText = styled.div `
  display: grid;
  grid-template-rows: min-content;
`
export const GroupButton = styled.div `
  display: grid;
  grid-template-rows: 1fr min-content;
  align-items: end;
  grid-gap: 1rem;
`
