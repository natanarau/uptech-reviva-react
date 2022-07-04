import styled, { css } from "styled-components";

interface AlertProps {
  positionAlert: string;
  bg: string;
  color: string;
  borderColor: string;
}

export const Alert = styled.div<AlertProps> `
 ${({positionAlert, bg, color, borderColor}) => css`
    background-color: ${bg};
    color: ${color};
    position: ${positionAlert};
    font-size: 2rem;
    padding: 1rem;
    border-radius: .4rem;
    border: solid 1px ${borderColor};
    text-align: center;
  `};
`