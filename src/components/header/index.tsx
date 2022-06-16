import React from 'react'
import styles from './styles.module.scss'
import { respMenu } from './functions'
import { Link } from 'react-router-dom'

export default function Header() {
  const [menu, setMenu] = React.useState<boolean>(true)
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container_title}>
          <h1 className={styles.title}>Reviva Fashion</h1>
          <span className={styles.by}>by RCHLO</span>
        </div>
        <Link to="/cart"><img className={styles.header__img} src={process.env.PUBLIC_URL + 'assets/img/icons/shopping_cart.svg'} alt="Carrinho de Compras"/></Link>
      </header>
      <nav className={styles.menu}>
        <button className={styles.menu__button} onClick={() =>  {setMenu(!menu); respMenu(menu)}}>
          <img src={process.env.PUBLIC_URL + 'assets/img/icons/menu.svg'} alt="Aqui abre e fecha o menu reponsivo"/>
        </button>

        <ul className={styles.menu__ul}>
          <li className={styles.menu__li}><Link className={styles.menu__link} to="/">Página Inicial</Link></li>
          <li className={styles.menu__li}><a className={styles.menu__link} href="">Moda Masculina</a></li>
          <li className={styles.menu__li}><a className={styles.menu__link} href="">Moda Feminina</a></li>
          <li className={styles.menu__li}><a className={styles.menu__link} href="">Moda Infantil</a></li>
          <li className={styles.menu__li}><a className={styles.menu__link} href="">Manual de Moda</a></li>
        </ul>
      </nav>
    </>
  )
}