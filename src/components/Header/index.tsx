import React from 'react'
import { respMenu } from './functions'
import { Link } from 'react-router-dom'
import * as S from './styles'
import Logo from 'components/Logo'

export default function Header() {
  const [menu, setMenu] = React.useState<boolean>(true)
  console.log(process.env.PUBLIC_URL)
  return (
    <>
      <S.Header>
        <Logo color='#D0403A'/>
        <Link to="/cart"><S.ImgCart src={'../assets/img/icons/shopping_cart.svg'} alt="Carrinho de Compras"/></Link>
      </S.Header>
      <S.BoxMenu>
        <S.ButtonMenu onClick={() =>  {setMenu(!menu); respMenu(menu)}}>
          <S.ImgMenu src={'../assets/img/icons/menu.svg'} alt="Aqui abre e fecha o menu reponsivo"/>
        </S.ButtonMenu>

        <S.UlMenu>
          <S.LiMenu><Link to="/">Página Inicial</Link></S.LiMenu>
          <S.LiMenu><Link to=''>Moda Masculina</Link></S.LiMenu>
          <S.LiMenu><Link to=''>Moda Feminina</Link></S.LiMenu>
          <S.LiMenu><Link to=''>Moda Infantil</Link></S.LiMenu>
          <S.LiMenu><Link to=''>Manual de Moda</Link></S.LiMenu>
        </S.UlMenu>
      </S.BoxMenu>
    </>
  )
}