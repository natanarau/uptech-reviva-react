import { Button, ImgFront} from './styles'

interface Attributes {
  width: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const ButtonSetCart = (props: Attributes) => {
  return (
    <>
      <Button onClick={props.onClick} width={props.width}>
        POR NO CARRINHO
        <ImgFront src={process.env.PUBLIC_URL + '../assets/img/icons/shopping_cart_2.svg'} alt="Adicionar ao Carrinho"/>
      </Button>
    </>
  )
}