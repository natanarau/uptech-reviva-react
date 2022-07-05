import React from 'react'
import * as S from './styles'

interface AlertProps {
  positionAlert: string;
  msn: string;
  bg: string;
  color: string;
  borderColor: string;
}

export default function Alert(props: AlertProps) {
  return (
    <S.Alert {...props}>{props.msn}</S.Alert>
  )
}