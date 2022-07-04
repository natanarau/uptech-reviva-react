import { Button, ImgFront} from './styles'

interface buttonProps {
  width: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const ButtonSetCart = (props: buttonProps) => {
  return (
    <>
      <Button onClick={props.onClick} width={props.width}>
        POR NO CARRINHO
        <ImgFront src={'../img/icons/shopping_cart_2.svg'} alt="Adicionar ao Carrinho"/>
      </Button>
    </>
  )
}