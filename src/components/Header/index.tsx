import React from 'react'
import { respMenu } from './functions'
import Link from 'next/link'
import * as S from './styles'
import Head from 'next/head'
import Logo from '../Logo'

export default function Header() {
  const [menu, setMenu] = React.useState<boolean>(true)
  return (
    <>
      <S.Header>
        <Logo color='#D0403A'/> 
        <Head>
          <title>Reviva Fashion</title>
          <meta name="description" content="Sua loja de roupas favorita é aqui na Reviva Fashion" />
          <link rel="icon" href="https://midia.fotos-riachuelo.com.br/spa-storefront/public/images/favicon.png" />
        </Head>
        <Link href="/cart"><S.ImgCart src={'../img/icons/shopping_cart.svg'} alt="Carrinho de Compras"/></Link>
      </S.Header>
      <S.BoxMenu>
        <S.ButtonMenu onClick={() =>  {setMenu(!menu); respMenu(menu)}}>
          <S.ImgMenu src={'../img/icons/menu.svg'} alt="Aqui abre e fecha o menu reponsivo"/>
        </S.ButtonMenu>

        <S.UlMenu>
          <S.LiMenu><Link href="/" >Página Inicial</Link></S.LiMenu>
          <S.LiMenu><Link href=''>Moda Masculina</Link></S.LiMenu>
          <S.LiMenu><Link href=''>Moda Feminina</Link></S.LiMenu>
          <S.LiMenu><Link href=''>Moda Infantil</Link></S.LiMenu>
          <S.LiMenu><Link href=''>Manual de Moda</Link></S.LiMenu>
        </S.UlMenu>
      </S.BoxMenu>
    </>
  )
}