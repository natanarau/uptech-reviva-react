import styled from "styled-components";

export const ContainerSize = styled.div `
  display: flex;
`
export const Label = styled.label `
  cursor: pointer;
`
export const InputSize = styled.input `
  all: unset;
  position: absolute;
`
export const SpanSize = styled.span `
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 0.1rem #E5E5E5;
  font-size: 1.6rem;
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  color: ${props => props.color === '#000000' && '#ffffff'};
  background-color: ${props => props.color};
`