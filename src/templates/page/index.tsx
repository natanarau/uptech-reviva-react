import Header from 'components/Header'
import Footer from 'components/Footer'
import * as S from './styles'
import React from 'react'
import Search from 'components/Search'

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