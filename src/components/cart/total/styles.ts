import styled from "styled-components";

export const BoxTotal = styled.div `
  display: grid;
  background-color: #f3ffe6;
  text-align: center;
  height: 100%;
  box-shadow: 0px 0px 13px;
  padding: 2rem;
  margin: 5rem 0
`
export const ButtonPay = styled.button `
  height: 5rem;
  width: 20rem;
  font-family: Arboria;
  margin: 2rem auto;
  border: solid 0.1rem #E5E5E5;
  font-size: 1.6rem;
  background-color: #70ff99;
  transition: 0.3s;
  cursor: pointer;
  box-shadow: 0.1rem 0.1rem 0.8rem 0.1rem #d4d4d4;
  &:hover {
    background-color: #01681e;
    color: #ffffff;
  }
`