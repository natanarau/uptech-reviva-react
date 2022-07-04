import * as S from './styles'
import Logo from 'components/Logo'
import { TextH2 } from 'components/Text'
import Newsletter from 'components/Footer/Newsletter'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <S.Footer>
        <Logo color='#D0403A' size='1rem' justifySelf='start' margin='5rem 3rem'/>
        <S.BoxFooter>
          <S.Box>
            <TextH2 size='2rem'>Menu</TextH2>
            <S.UlFooter>
              <S.LiFooter><Link href='/'>Página Inicial</Link></S.LiFooter>
              <S.LiFooter><Link href=''>Moda Masculina</Link></S.LiFooter>
              <S.LiFooter><Link href=''>Moda Feminina</Link></S.LiFooter>
              <S.LiFooter><Link href=''>Manual de Moda</Link></S.LiFooter>
            </S.UlFooter>
          </S.Box>
          <S.Box>
            <TextH2 size='2rem'>Siga-nos nas redes sociais</TextH2>
            <S.BoxRedes>
              <S.LinksA href='#'><S.ImgRedes src={'../img/icons/facebook.svg'} alt="Facebook"/></S.LinksA>
              <S.LinksA href='#'><S.ImgRedes src={'../img/icons/twitter.svg'} alt="Twitter"/></S.LinksA>
              <S.LinksA href='#'><S.ImgRedes src={'../img/icons/instagram.svg'} alt="Instagram"/></S.LinksA>
              <S.LinksA href='#'><S.ImgRedes src={'../img/icons/youtube.svg'} alt="Youtube"/></S.LinksA>
            </S.BoxRedes>
          </S.Box>
          <S.Box>
            <TextH2 size='2rem'>Entre em contato</TextH2>
            <S.UlFooter>
              <S.LiFooter>
                <S.LinksA href="mailto:reviva@rchlo.com.br">
                  reviva@rchlo.com.br
                </S.LinksA>
              </S.LiFooter>
              <S.LiFooter>
                <S.LinksA href="">
                  WhasApp 
                  <S.ImgContact src={'../img/icons/whatsapp.svg'} alt="WhatsApp da loja"/>
                </S.LinksA>
              </S.LiFooter>
              <S.LiFooter>
                <S.LinksA href="tel:+551121233321">
                  11 2123-3321 
                  <S.ImgContact src={'../img/icons/tel.svg'} alt="Numero da Loja"/>
                </S.LinksA>
              </S.LiFooter>
            </S.UlFooter>
          </S.Box>
          <S.Box>
            <TextH2 size='2rem'>Assine nossa newsletter</TextH2>
            <Newsletter />
          </S.Box>
        </S.BoxFooter>
      </S.Footer>
    </>
  )
}