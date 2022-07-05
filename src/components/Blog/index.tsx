import * as S from './styles'
import { TextH2 } from 'components/Text'

export default function Blog() {
  return (
    <>
      <TextH2 size='2rem' margin='2rem 0'>Na dúvida sobre combinar suas roupas e ficar incrível? Confira nossas dicas em nosso blog</TextH2>

      <S.BoxBlog>
        <S.BoxBlobgLg>
          <S.ImgBlogLg src={'../img/blog/blog1.png'} alt="Imgem do Look"/>
          <S.TitleBlog>FAÇA UM NOZINHO.</S.TitleBlog>
        </S.BoxBlobgLg>
        <S.BloxImgMin>
          <S.ImgBlogMin src={'../img/blog/blog2.png'} alt="Imgem do Look"/>
          <S.TitleBlog>MISTURE ESTAMPAS, CRIE UM EQUILÍBRIO.</S.TitleBlog>
          <S.ImgBlogMin src={'../img/blog/blog3.png'} alt="Imgem do Look"/>
          <S.TitleBlog>COLOQUE A BLUSA/CAMISETA/CAMISA POR DENTRO OU MEIO PRESA.</S.TitleBlog>
        </S.BloxImgMin>
      </S.BoxBlog>
    </>
  )
}