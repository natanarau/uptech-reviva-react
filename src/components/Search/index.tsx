import React from 'react'
import * as S from './styles'

export default function Searh() {
  return (
    <S.Forms>
      <S.BoxSearch>
        <S.Input type="text" placeholder="Faça sua busca aqui se ja souber o que está procurando..."/>
        <S.Button>
          <S.Img src={'../img/icons/lupa.svg'} alt="Lupa para pesquisar"/>
        </S.Button>
      </S.BoxSearch>
    </S.Forms>
  )
}