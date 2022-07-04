import styled from "styled-components";

export const Header = styled.header `
  display: flex;
  justify-content: space-between;
  margin: 5rem 6rem;
  align-items: center;
  @media only screen and (max-width: 630px) {
    margin: 5rem 2rem
  }
`
export const ImgCart = styled.img `
  width: 3.5rem;
`
export const BoxMenu = styled.nav `
  background-color: #eaeaea;
`
export const ButtonMenu = styled.button `
  display: none;
  @media only screen and (max-width: 910px) {
    display: inline;
    width: 5rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`
export const UlMenu = styled.ul `
  display: flex;
  height: 5rem;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (max-width: 910px) {
    left: -100vw;
    display: grid;
    justify-items: center;
    position: absolute;
    background-color: #eaeaea;
    width: 100%;
    height: 30rem;
    transition: 0.5s;
  }
`
export const LiMenu = styled.li `
  font-size: 1.4rem;
  list-style: none;
  transition: 0.3s;
  margin: 2rem;
`
export const ImgMenu = styled.img `
  display: block;
`