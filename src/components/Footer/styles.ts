import styled from "styled-components";

export const Footer = styled.footer `
  display: grid;
  background-color: #e8e8e8;
`
export const BoxFooter = styled.div `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem;
  justify-content: space-between;
  margin: 0 3.5rem 3.5rem 3.5rem;

  @media only screen and (max-width: 910px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 630px) {
    grid-template-columns: 1fr;
  }
`
export const UlFooter = styled.ul `
  display: block;
`
export const LiFooter = styled.li `
  font-size: 1.7rem;
  margin: 0.8rem 0;
  list-style: none;
  transition: .3s;
  &:hover {
    opacity: 70%;
  }
`
export const ImgRedes = styled.img `
  width: 2rem;
  margin: 1rem 1rem 1rem 0rem;
`
export const ImgContact = styled.img `
  width: 2rem;
  vertical-align: sub;
  margin-left: 1rem;
`
export const LinksA = styled.a `
  display: block;
`
export const BoxRedes = styled.div `
  display: flex;
`
export const Box = styled.div `
  display: Block;
`