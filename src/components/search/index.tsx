import styles from './styles.module.scss'

type Props = {}

export default function Searh({}: Props) {
  return (
    <div className={styles.search}>
      <input className={styles.search__input} type="text" placeholder="Faça sua busca aqui se ja souber o que está procurando..."/>
      <button className={styles.search__button}>
        <img className={styles.search__img} src={process.env.PUBLIC_URL + 'assets/img/icons/lupa.svg'} alt="Lupa para pesquisar"/>
      </button>
    </div>
  )
}