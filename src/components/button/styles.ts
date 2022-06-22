import styled from "styled-components";

interface Attributes {
  width: string
}

export const Button = styled.button<Attributes> `
  font-family: 'Arboria', sans-serif;
  width: ${props => props.width};
  height: 4rem;
  border: solid 0.1rem #E5E5E5;
  color: #261E1E;
  background-color: transparent;
  cursor: pointer;
  perspective: 55rem;
  transition: 0.5s;
  &:focus {
    background-color: #70ff99;
    border: solid 0.1rem #525252
  }
  &:hover {
    opacity: 70%;
  }
`
export const ImgFront = styled.img `
  position: absolute;
  right: 0;
  margin-right: 0.5rem;
  margin-top: -0.7rem;
  width: 3rem
`