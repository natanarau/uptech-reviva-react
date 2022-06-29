import styled from "styled-components";

export const BoxCard = styled.div `
  display: grid;
  grid-template-rows: 2fr 1fr;
  height: 15rem;
  background-color: #70ffed;
  margin: 5rem 0;
  padding: 0.5rem;
`
export const DescriptionCard = styled.div `
  display: grid;
  justify-content: center;
  align-content: end;
  @media only screen and (max-width: 700px) {
    text-align: center;
  }
`