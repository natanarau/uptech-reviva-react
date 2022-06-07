import styles from './styles.module.scss'

type Props = {}

export default function Footer({}: Props) {
  return (
    <>
      <footer className={styles.footer_container}>
        <div className={styles.container_title_footer}>
          <h1 className={styles.title}>Reviva Fashion</h1>
          <span className={styles.container_title_footer__span}>by RCHLO</span>
        </div>
        <div className={styles.footer_contact}>
          <nav>
            <h2>Menu</h2>
            <ul>
              <li className={styles.footer_contact__li}><a href="">Página Inicial</a></li>
              <li className={styles.footer_contact__li}><a href="">Moda Masculina</a></li>
              <li className={styles.footer_contact__li}><a href="">Moda Feminina</a></li>
              <li className={styles.footer_contact__li}><a href="">Moda Infantil</a></li>
              <li className={styles.footer_contact__li}><a href="">Manual de Moda</a></li>
            </ul>
          </nav>
          <div>
            <h2>Siga-nos nas redes sociais</h2>
            <div className={styles.redes}>
              <a href=""><img className={styles.redes__img} src={process.env.PUBLIC_URL + 'assets/img/icons/facebook.svg'} alt="Facebook"/></a>
              <a href=""><img className={styles.redes__img} src={process.env.PUBLIC_URL + 'assets/img/icons/twitter.svg'} alt="Twitter"/></a>
              <a href=""><img className={styles.redes__img} src={process.env.PUBLIC_URL + 'assets/img/icons/instagram.svg'} alt="Instagram"/></a>
              <a href=""><img className={styles.redes__img} src={process.env.PUBLIC_URL + 'assets/img/icons/youtube.svg'} alt="Youtube"/></a>
            </div>
          </div>
          <div className={styles.contact}>
            <h2>Entre em contato</h2>
            <ul>
              <li className={styles.footer_contact__li}><a href="mailto:reviva@rchlo.com.br">reviva@rchlo.com.br</a></li>
              <li className={styles.footer_contact__li}>
                <a href="https://web.whatsapp.com/send?phone=551121233321">WhasApp <img className={styles.contact__img} src={process.env.PUBLIC_URL + 'assets/img/icons/whatsapp.svg'} alt="WhatsApp da loja"/></a>
              </li>
              <li className={styles.footer_contact__li}>
                <a href="tel:+551121233321">11 2123-3321 <img className={styles.contact__img} src={process.env.PUBLIC_URL + 'assets/img/icons/tel.svg'} alt="Numero da Loja"/></a>
              </li>
            </ul>
          </div>
          <div className={styles.newsletter}>
            <h2>Assine nossa newsletter</h2>
            <input className={styles.newsletter__input} type="text" name="newsletter"/>
            <button className={styles.newsletter__button}>ASSINE JÁ</button>
          </div>
        </div>
      </footer>
    </>
  )
}