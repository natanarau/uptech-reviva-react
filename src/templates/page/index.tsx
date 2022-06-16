import Header from 'components/header'
import Footer from 'components/footer'
import styles from './styles.module.scss'
import React from 'react'
import Searh from 'components/search'

interface pageType {
  children: React.ReactNode;
}

export default function PageTemplate(props: pageType) {
  return (
    <>
    <Header />
      <main className={styles.container}>
        <Searh />
        {props.children}
      </main>
    <Footer />
    </>
  )
}