import styled from "styled-components";

export const Forms = styled.form `
  display: block;
`
export const Input = styled.input `
  width: 25rem;
  height: 3rem;
  background-color: #ffffff;
  border: solid 0.1rem #959595;
  margin: 0.8rem 0;
`
export const Button = styled.button `
  font-family: 'Arboria', sans-serif;
  width: 14rem;
  height: 3rem;
  background-color: #000000;
  border: none;
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 70%;
  }
`