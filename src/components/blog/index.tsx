import styles from './styles.module.scss'

type Props = {}

export default function Blog({}: Props) {
  return (
    <>
      <h2 className={styles.category}>Na dúvida sobre combinar suas roupas e ficar incrível?<br/>Confira nossas dicas em nosso blog</h2>

      <div className={styles.blog}>
        <article className={styles.blog_master}>
          <img className={styles.blog_master__img} src={process.env.PUBLIC_URL + 'assets/img/blog/blog1.png'} alt="Imgem do Look"/>
          <p className={styles.blog__p}>FAÇA UM NOZINHO.</p>
        </article>
        <article className={styles.blog_min}>
          <img className={styles.blog__img} src={process.env.PUBLIC_URL + 'assets/img/blog/blog2.png'} alt="Imgem do Look"/>
          <p className={styles.blog__p}>MISTURE ESTAMPAS, CRIE UM EQUILÍBRIO.</p>

          <img className={styles.blog__img} src={process.env.PUBLIC_URL + 'assets/img/blog/blog3.png'} alt="Imgem do Look"/>
          <p className={styles.blog__p}>COLOQUE A BLUSA/CAMISETA/CAMISA POR DENTRO OU MEIO PRESA.</p>
        </article>
      </div>
    </>
  )
}