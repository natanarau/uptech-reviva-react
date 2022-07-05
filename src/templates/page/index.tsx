import React from 'react'
import Header from 'components/Header'
import Search from 'components/Search'
import Footer from 'components/Footer'
import * as S from './styles'

interface pageType {
  children: React.ReactNode;
}

export default function PageTemplate(props: pageType) {
  return (
    <>
    <Header />
    <S.Container>
      <Search />
      {props.children}
    </S.Container>
     <Footer /> 
    </>
  )
}