import styled from "styled-components";

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