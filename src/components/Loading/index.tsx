import React from 'react'
import * as S from './styles'

interface LoadingProps {

}

export default function Loading(props: LoadingProps) {
  return (
    <S.Loading src='../img/loading.gif'/>
  )
}