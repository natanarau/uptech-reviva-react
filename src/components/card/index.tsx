import styles from './styles.module.scss'

export default function Card() {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.description_card}>
          <p className={styles.description_card__desc}>Fique por dentro de tudo que há de novidade no mundo da moda!</p>
          <p className={styles.description_card__manual}>Baixe já nosso manual de moda!</p>
        </div>
        <div className={styles.card_title}>
          <h1 className={styles.title_manual}>Reviva Fashion</h1>
          <span className={styles.card_title__span}>by RCHLO</span>
        </div>
      </div>
    </>
  )
}